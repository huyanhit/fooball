<template>
    <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center  px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your account
                    </h1>
                    <form class="space-y-4 md:space-y-6" action="#">
                        <div class="text-red-500">{{data.error}}</div>
                        <div>
                            <div :class="{ error: v$.email.$errors.length }">
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" v-model="data.login.email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="">
                                <div class="input-errors" v-for="error of v$.email.$errors" :key="error.$uid">
                                    <div class="error-msg text-red-500 text-xs">{{ error.$message }}</div>
                                </div>
                            </div>
                           </div>
                        <div>
                            <div :class="{ error: v$.password.$errors.length }">
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" v-model="data.login.password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                                <div class="input-errors" v-for="error of v$.password.$errors" :key="error.$uid">
                                    <div class="error-msg text-red-500 text-xs">{{ error.$message }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="remember" v-model="data.login.remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="">
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                                </div>
                            </div>
                            <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                        </div>
                        <div class="text-center">
                            <button @click.prevent="loginApp" class="text-white bg-blue-950 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                        </div>
                        <p class="text-center text-sm font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
    import {reactive, ref} from 'vue';
    import apiService from "@/composables/use-api";
    import router from "@/router";
    import { required, email } from '@vuelidate/validators'
    import useVuelidate from "@vuelidate/core";

    const data = reactive({
            error: '',
            form: false,
            showPass: false,
            showAlert: false,
            apiMessage: '',
            login:{
                email: '',
                password: '',
                remember: false,
            },
            login_rules:{
                email: { required, email },
                password: { required },
            },
        }
    )

    const v$ = useVuelidate(data.login_rules, data.login);
    const loginApp = async function(e){
        if(await v$.value.$validate()){
            apiService.callApi('login', 'POST', JSON.stringify(data.login)).then(response=>{
                if(response.status === 1){
                    data.error = '';
                    localStorage.setItem('auth', JSON.stringify(response.data));
                    router.push({ path: 'task' })
                }else{
                    data.error = response.message;
                }
            });
        }
    }
</script>

