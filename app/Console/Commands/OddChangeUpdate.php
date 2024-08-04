<?php

namespace App\Console\Commands;

use App\Models\OddDetail;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Cache;

class OddChangeUpdate extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:odd-change-update';

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
        ini_set('memory_limit', -1);
        $odds[2] = json_decode(file_get_contents('http://api.isportsapi.com/sport/football/odds/main/changes?api_key=ZS7RR6ijpzY3iiM3'), true);
        foreach ($odds as $key => $odd){
            if($odd['code'] === 0){
                echo(' running... ');
                if(isset($odd['data'])){
                    $this->processOdd($key, $odd['data']);
                }
            }else{
                echo(' update ');
            }
        }
    }

    private function processOdd($key, $odds){
        if($key == 1){
            $handicap = array('matchId','companyId', 'initialHandicap', 'initialHome', 'initialAway','instantHandicap','instantHome','instantAway','maintenance','inPlay', 'changeTime','close','OddsType');
            $europeOdds = array('matchId','companyId','initialHome','initialDraw','initialAway','instantHome','instantDraw','instantAway','changeTime','close','OddsType');
            $overUnder = array('matchId','companyId','initialHandicap', 'initialOver', 'initialUnder', 'instantHandicap','instantOver','instantUnder','changeTime','close','OddsType');
            $handicapHalf = array('matchId','companyId','initialHandicap', 'initialHome', 'initialAway', 'instantHandicap','instantHome','instantAway','changeTime','OddsType');
            $overUnderHalf = array('matchId','companyId','initialHandicap', 'initialOver','initialUnder', 'instantHandicap','instantOver','instantUnder','changeTime','OddsType');
        }else if($key == 2) {
            $handicap = array('matchId', 'companyId', 'instantHandicap', 'instantHome', 'instantAway', 'maintenance', 'inPlay', 'changeTime', 'close', 'OddsType');
            $europeOdds = array('matchId', 'companyId', 'instantHome', 'instantDraw', 'instantAway', 'changeTime', 'close', 'OddsType');
            $overUnder = array('matchId', 'companyId', 'instantHandicap', 'instantOver', 'instantUnder', 'changeTime', 'close', 'OddsType');
            $handicapHalf = array('matchId', 'companyId', 'instantHandicap', 'instantHome', 'instantAway', 'changeTime', 'OddsType');
            $overUnderHalf = array('matchId', 'companyId', 'instantHandicap', 'instantOver', 'instantUnder', 'changeTime', 'OddsType');
        }else if($key == 3 || $key == 4){
            $handicap = array('matchId','companyId','initialHandicap', 'initialHome', 'initialAway','instantHandicap','instantHome','instantAway','maintenance','inPlay','changeTime','close');
            $europeOdds = array('matchId','companyId','initialHome','initialDraw','initialAway','instantHome','instantDraw','instantAway','changeTime','close');
            $overUnder = array('matchId','companyId','initialHandicap', 'initialOver', 'initialUnder', 'instantHandicap','instantOver','instantUnder','changeTime','close');
            $handicapHalf = array('matchId','companyId','initialHandicap', 'initialHome', 'initialAway', 'instantHandicap','instantHome','instantAway','changeTime');
            $overUnderHalf = array('matchId','companyId','initialHandicap', 'initialOver','initialUnder', 'instantHandicap','instantOver','instantUnder','changeTime');
        }else if($key == 5){
            $handicap = array('matchId','companyId', 'initialHandicap', 'initialHome', 'initialAway','instantHandicap','instantHome','instantAway','maintenance','inPlay',
                'handicapIndex', 'handicapCount', 'changeTime','close','OddsType');
            $europeOdds = array('matchId','companyId','initialHome','initialDraw','initialAway','instantHome','instantDraw','instantAway','changeTime',
                'handicapIndex', 'close','OddsType');
            $overUnder = array('matchId','companyId','initialHandicap','initialOver','initialUnder','instantHandicap','instantOver','instantUnder',
                'handicapIndex', 'changeTime','close','OddsType');
            $handicapHalf = array('matchId','companyId','initialHandicap', 'initialHome', 'initialAway', 'instantHandicap','instantHome','instantAway',
                'inPlay', 'handicapIndex','changeTime','OddsType');
            $overUnderHalf = array('matchId','companyId','initialHandicap', 'initialOver','initialUnder', 'instantHandicap','instantOver','instantUnder',
                'handicapIndex','changeTime','OddsType');
        }else if($key == 6){
            $handicap = array('matchId', 'companyId', 'instantHandicap', 'instantHome', 'instantAway', 'maintenance', 'inPlay','handicapIndex', 'changeTime', 'close', 'OddsType');
            $europeOdds = array('matchId', 'companyId', 'instantHome', 'instantDraw', 'instantAway','handicapIndex', 'changeTime', 'close', 'OddsType');
            $overUnder = array('matchId', 'companyId', 'instantHandicap', 'instantOver', 'instantUnder','handicapIndex', 'changeTime', 'close', 'OddsType');
            $handicapHalf = array('matchId', 'companyId', 'instantHandicap', 'instantHome', 'instantAway','inPlay', 'handicapIndex','changeTime', 'OddsType');
            $overUnderHalf = array('matchId', 'companyId', 'instantHandicap', 'instantOver', 'instantUnder','handicapIndex', 'changeTime', 'OddsType');
        }if($key == 7 || $key == 8){
            $handicap = array('matchId','companyId','initialHandicap', 'initialHome', 'initialAway','instantHandicap','instantHome','instantAway','maintenance','inPlay', 'handicapIndex', 'handicapCount','changeTime','close');
            $europeOdds = array('matchId','companyId','initialHome','initialDraw','initialAway','instantHome','instantDraw','instantAway','handicapIndex','changeTime','close');
            $overUnder = array('matchId','companyId','initialHandicap', 'initialOver', 'initialUnder', 'instantHandicap','instantOver','instantUnder','handicapIndex','changeTime','close');
            $handicapHalf = array('matchId','companyId','initialHandicap', 'initialHome', 'initialAway', 'instantHandicap','instantHome','instantAway','inPlay','handicapIndex', 'changeTime');
            $overUnderHalf = array('matchId','companyId','initialHandicap', 'initialOver','initialUnder', 'instantHandicap','instantOver','instantUnder','handicapIndex','changeTime');
        }

        foreach ($odds as $type => $data){
            $results = [];

            $data = array_map(function($item){
                return explode(',', $item);
            }, $data);

            foreach ($data as $val){
                switch ($type){
                    case 'handicap':
                        $results[] = $this->combineOdd($handicap, $val, $key, $type);
                        break;
                    case 'europeOdds':
                        $results[] = $this->combineOdd($europeOdds, $val, $key, $type);
                        break;
                    case 'overUnder':
                        $results[] = $this->combineOdd($overUnder, $val, $key, $type);
                        break;
                    case 'handicapHalf':
                        $results[] = $this->combineOdd($handicapHalf, $val, $key, $type);
                        break;
                    case 'overUnderHalf':
                        $results[] = $this->combineOdd($overUnderHalf, $val, $key, $type);
                        break;
                }
            }
            if($key === 1){
                foreach (array_chunk($results, 1000) as $chunk) {
                    OddDetail::upsert($chunk, ['matchId', 'companyId', 'type', 'key', 'changeTime'], [
                        'initialHandicap', 'initialHome', 'initialOver', 'initialDraw', 'initialUnder',
                        'initialAway', 'instantHandicap', 'instantHome', 'instantOver', 'instantDraw',
                        'instantUnder', 'instantAway', 'maintenance', 'inPlay', 'handicapIndex',
                        'handicapCount', 'changeTime', 'close', 'OddsType'
                    ]);
                }
            }else{
                foreach ($results as $result) {
                    OddDetail::updateOrCreate([
                        'matchId' => $result['matchId'],
                        'companyId' => $result['companyId'],
                        'type' => $result['type'],
                        'key' => $result['key'],
                        'changeTime' => $result['changeTime'],
                    ], $result);

                    echo(' update '. $result['matchId']);
                }
            }
        }
    }

    private function combineOdd($odd, $data, $key, $type){
        $combine = array_combine($odd, $data);
        $combine['key'] = $key;
        $combine['type'] = $type;

        return $combine;
    }
}
