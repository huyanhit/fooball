<?php

namespace App\Console\Commands;

use App\Models\Team;
use Illuminate\Console\Command;

class GetTeam extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'api:get-team';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $teams = json_decode(file_get_contents('http://api.isportsapi.com/sport/football/team?api_key=mVOt8RqlCmJiaHo7'), true);
        if(isset($teams['data'])){
            echo 'get json success';
            $chunk = array_chunk($teams['data'], 1000);
            foreach ($chunk as $data){
                Team::upsert($data, uniqueBy: ['teamId'],
                    update: ['leagueId', 'name', 'logo', 'foundingDate', 'isNational',
                        'address', 'area','venue', 'name', 'capacity', 'coach', 'website']);
                echo('insert or update success ---- ');
            }
        } else {
            echo 'get json fail';
        }
    }
}
