import { WikiArticle } from '../../types/wiki';

import starterImg from '../../assets/easterevent/starter.png';
import jungleImg from '../../assets/easterevent/jungle.png';
import desertImg from '../../assets/easterevent/desert.png';
import snowImg from '../../assets/easterevent/snow.png';
import sailorImg from '../../assets/easterevent/sailor.png';
import shibuyaImg from '../../assets/easterevent/shibuya.png';
import lawlessImg from '../../assets/easterevent/lawless.png';

export const easterArticle = new WikiArticle(
    'THE EASTER EGG HUNT QUEST is a special event where you must find eggs hidden across various islands. There are two types of egg spawns: Guaranteed and Timed.'
)
.addSimpleSection(
    'ℹ️ Egg Spawn Types',
    '**Guaranteed Egg:** These eggs will always be at their location and will not despawn.\n\n**Timed Egg:** These eggs spawn and despawn on a cycle. A Timed Egg spawns every 10 minutes and remains for 5 minutes before despawning.'
)
.addSimpleSection('1st: Starter Island', 'Type: **Timed Egg**', starterImg)
.addSimpleSection('2nd: Jungle Island', 'Type: **Guaranteed Egg**', jungleImg)
.addSimpleSection('3rd: Desert Island', 'Type: **Timed Egg**', desertImg)
.addSimpleSection('4th: Snow Island', 'Type: **Guaranteed Egg**', snowImg)
.addSimpleSection('5th: Sailor Island', 'Type: **Guaranteed Egg**', sailorImg)
.addSimpleSection('6th: Shibuya Island', 'Type: **Timed Egg**', shibuyaImg)
.addSimpleSection('7th: Lawless Island', 'Type: **Timed Egg**', lawlessImg);
