'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "383e625d4ebdf0687945b0e0fd41ac56",
"index.html": "621b501413fa7cc97550e0178d0201ad",
"/": "621b501413fa7cc97550e0178d0201ad",
"main.dart.js": "f4e4710017ce87266e115ced878649fb",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6203606eeab191c3193e6ec54f15bf84",
"assets/AssetManifest.json": "d1a714510861a16abd0c6ec541ef6735",
"assets/NOTICES": "92694970cbd01c19054ba3c738e9c578",
"assets/FontManifest.json": "f626f7079f90d13fe9e07d7c2ef22812",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/ui/question_fail.png": "de08c6d0c6a9263ef455c088eb4efcfc",
"assets/assets/ui/thumbnail_bg.png": "4460855c4b9db7014cae5167cbb0c190",
"assets/assets/ui/question_success.png": "1abbdf7b5ffe92f6e4ecddd14d6aaa5c",
"assets/assets/ui/thumbnail_edit.png": "c111e71dca0d19c924a6c1fd340f6a09",
"assets/assets/ui/d_day.png": "adb5c969f2adc8fa566e23ce8c9a6e84",
"assets/assets/ui/thumbnail_line.png": "07211ea72c86fac10bf7d9fe72ede8d8",
"assets/assets/video/Butterfly-209.mp4": "7b38560e7dbf868e58e29984509f2f96",
"assets/assets/images/book_cover_1002.jpeg": "f8e9c6373ea8c012a3f17a621ba6cca3",
"assets/assets/images/check_check.jpeg": "f13564521f96fb92bdc742e225030d29",
"assets/assets/images/mono-knewstuff.svg": "ff9eda63f5f1845aef05e4aa9e746b0f",
"assets/assets/images/completed2.png": "08ce46eb11f508d6f8b9c2d060a93f26",
"assets/assets/images/book_cover_1000.jpeg": "264d79cbbef41a821f0de50db79013b4",
"assets/assets/images/completed.png": "9c787150380eab5d534eee9ca2aa1cd9",
"assets/assets/images/bag01.png": "99a5723b9584b55d754e8c0b8dd82ce3",
"assets/assets/images/thumbnail.jpg": "e28510c75775841fc0bc3052bf99861c",
"assets/assets/images/book_cover_1001.jpeg": "5cb32de0bc208e0a5b25fd06e868fe21",
"assets/assets/images/challenge.png": "460d4dc1d97d2718944a19a5388986fe",
"assets/assets/images/concept_doc_04.png": "ec5541ecaeb078ae168a090247718a11",
"assets/assets/images/book_cover_1006.jpeg": "e889f67e728260bdcf856811bfcc75b5",
"assets/assets/images/concept_doc_01.png": "89db975dbfdae485d4496df89db00201",
"assets/assets/images/concept_doc_03.png": "251b5668214bdcda66c8244e2777e0b7",
"assets/assets/images/concept_doc_02.png": "4298ca45c7a16bcdf8771431776d0bc5",
"assets/assets/json/bookmark_info.json": "7f8fb00e21551b6e46a3e26e4ae9a28d",
"assets/assets/json/book_1003.json": "954c3eba66b6ac3dc253808a40ecd072",
"assets/assets/json/concept_info.json": "fffedc524e251724d05a8e561ca66e2d",
"assets/assets/json/book_1002.json": "c0f44690c2ec6ab22c9960f0c6c57e5f",
"assets/assets/json/review_note_info.json": "1369f090b29d713bbc0b7ea9186d9072",
"assets/assets/json/question_info.json": "6cde93bc8d3189f20936f236b2b86de3",
"assets/assets/json/bundle_info2.json": "6907761d7454feca37fea228ac40f0d4",
"assets/assets/json/book_1009.json": "5c73a9e10830df0219203ea65a93811a",
"assets/assets/json/question_1.json": "9ac3cd778e5386f1c717094eb5522a95",
"assets/assets/json/book_1005.json": "01be174bb4b8400e74e0ed8197af8405",
"assets/assets/json/book_1004.json": "3d37ea028eb63dd96d0fabe589d7fe7b",
"assets/assets/json/book_1008.json": "1a600aebbd762d856c4226493f7b7661",
"assets/assets/json/book_1007.json": "844fab849003116f22c7a3f4334474fd",
"assets/assets/json/question_3.json": "17cffd6fb7f50913fde9dd38333b975d",
"assets/assets/json/comment_info.json": "f5ac743e85ee76732d52ad590e8dfcbb",
"assets/assets/json/question_2.json": "2c8aafb13f41a9909aa03ce439876b54",
"assets/assets/json/book_1006.json": "e8ee58872f99cc9fe6e1d984d1f477f3",
"assets/assets/json/book_1001.json": "f7808fafa707aa3341edfeb95d38eac6",
"assets/assets/json/book_info.json": "cb392c8ffb14b8086d2b8bc53e9479cc",
"assets/assets/json/bundle_info.json": "eb67be7a84c4dab688862e6325e1344f",
"assets/assets/json/question_info2.json": "06fe74bafb110dd13709a7fea8f8e401",
"assets/assets/json/question_4.json": "a1e9dc1b49b43002c5acdcf4766e40c9",
"assets/assets/json/book_1000.json": "670ff25859fc6ed0198e9509c180a486",
"assets/assets/quest/q0002_05.jpg": "0946b2ac6b89a52b98c01de631dd33f0",
"assets/assets/quest/q0002_04.jpg": "a67b72bc05e5bcd804db8ca1c43bdc35",
"assets/assets/quest/q0002_03.jpg": "4839eddcfcbd6a5cd487074a5958615f",
"assets/assets/quest/q0002_02.jpg": "80b3f8d8384daa01c8be1925af17db15",
"assets/assets/quest/q0002_01.jpg": "a8d926f1b63476a7efe0ac679ef6e7ba",
"assets/assets/quest/num4.jpg": "49ae4756b87ccbeb93d81400ed6c6404",
"assets/assets/quest/q0004.jpg": "8d90b798e184450eaf85b9e91a118156",
"assets/assets/quest/q0005.jpg": "3fb8ac1095d045f9a2c2134a0a085191",
"assets/assets/quest/num5.jpg": "3ba50e43c48311b5655291d9f99e5fad",
"assets/assets/quest/q0004_04.jpg": "528b8e577b48e7c1b469666ca32c1699",
"assets/assets/quest/q0004_05.jpg": "c93a27679c2a8580ed1cfd63d6e2a0cf",
"assets/assets/quest/num2.jpg": "5e4429a4adb971ba535139726ddbe5a1",
"assets/assets/quest/q0004_01.jpg": "b6af7fc6dbc41cc063cf048ce18251de",
"assets/assets/quest/q0002.jpg": "913408b4f983c6cd67f82e5f970645f0",
"assets/assets/quest/q0003.jpg": "2bd916c17f662ce94a77d63fc9457532",
"assets/assets/quest/num3.jpg": "f3eab9e04bc3acf9e64bcc4fba0c4867",
"assets/assets/quest/num1.jpg": "73bfc5e0ca2c65cce72439163d0701d0",
"assets/assets/quest/q0004_02.jpg": "bc338622b6e52f415af416281a6d9f6c",
"assets/assets/quest/q0001.jpg": "54c8e57ca0358010f81fc7d1f995e389",
"assets/assets/quest/q0004_03.jpg": "8844e509fe473ef40a8f77bfdefd621f",
"assets/assets/quest/a0001.jpg": "14de2929b68b28530113ae93d5c0baa3",
"assets/assets/quest/q0003_04.jpg": "091155a2f9a1cee39b257771c7cc7560",
"assets/assets/quest/a0002.jpg": "d92a7aedb1a6fabf216389972cf00886",
"assets/assets/quest/q0003_05.jpg": "45b4426aded00168e5ec654b8e4bb7d7",
"assets/assets/quest/q0003_01.jpg": "0a14c0f6827f65506ac1c41ec28efb24",
"assets/assets/quest/q0003_02.jpg": "3738a6812c89d7ce3b754b1cf2664744",
"assets/assets/quest/q0003_03.jpg": "8e9a287b2aa47d6a53bcffe10f077f4e",
"assets/assets/quest/q0005_05.jpg": "16a88f6e9b14ac54c5f0cf9dfb78407c",
"assets/assets/quest/q0005_04.jpg": "af038cd10b932fe0fce9fc9feab75ab1",
"assets/assets/quest/c0005.jpg": "6dc013d3575f98b851cf00d90d20c551",
"assets/assets/quest/c0004.jpg": "cb634d584050bf47e8d3f3851ee1b922",
"assets/assets/quest/q0005_03.jpg": "6cf8b08db95c9326913643cb9d85b7db",
"assets/assets/quest/q0005_02.jpg": "1576aa80fc62d00da6ad8dcb4b52d656",
"assets/assets/quest/c0001.jpg": "b53cbf5f8a11c979f93f557f5b83b916",
"assets/assets/quest/c0003.jpg": "e9cfca326f76e3aa714be6241eec5e16",
"assets/assets/quest/q0005_01.jpg": "d3ba34fa83783b82314f338b20480fc9",
"assets/assets/quest/c0002.jpg": "da87c66fcd5ee3d1fbe6fdecce7ce39a",
"assets/assets/mvp_quest/b03_q02_c02.jpg": "27fc67987c5f16c9fb95256eec0ad596",
"assets/assets/mvp_quest/b03_q02_e04.jpg": "40ab1c3d46e0d6df9649cf0315ce1681",
"assets/assets/mvp_quest/b01_q02.jpg": "913408b4f983c6cd67f82e5f970645f0",
"assets/assets/mvp_quest/b03_q03_e01.jpg": "06b268d6c54a0dfca962deaa8ffbd55f",
"assets/assets/mvp_quest/b01_q03.jpg": "2bd916c17f662ce94a77d63fc9457532",
"assets/assets/mvp_quest/b03_q02_e05.jpg": "534c818d65309082e0adb623c1bfac72",
"assets/assets/mvp_quest/b02_q05_c05.jpg": "e3684435274b8b85db3933637e3eebcc",
"assets/assets/mvp_quest/b02_q04_e04.jpg": "711c34469e8e79fe93d85c551232b69d",
"assets/assets/mvp_quest/b01_q01.jpg": "54c8e57ca0358010f81fc7d1f995e389",
"assets/assets/mvp_quest/b03_q03_e02.jpg": "0ec9312be1d149047a661d57768b1d66",
"assets/assets/mvp_quest/b03_q03_e03.jpg": "bd1519a9bb8d6d0101be633154bbdf9b",
"assets/assets/mvp_quest/b02_q04_e05.jpg": "804d0c1d3def49888182d9893c4e93f5",
"assets/assets/mvp_quest/b02_q04_e01.jpg": "26bbae1e776c064529a53c27dd2ff227",
"assets/assets/mvp_quest/b03_q02_e02.jpg": "01d70561d6ba77c365c2dcb3146626f6",
"assets/assets/mvp_quest/b01_q04.jpg": "8d90b798e184450eaf85b9e91a118156",
"assets/assets/mvp_quest/b01_q05.jpg": "3fb8ac1095d045f9a2c2134a0a085191",
"assets/assets/mvp_quest/b03_q02_e03.jpg": "9373baffc0b8b08724b36d1f0ff2bcf0",
"assets/assets/mvp_quest/b02_q04_e02.jpg": "e674ede59b7c2b46b6fd242891d68697",
"assets/assets/mvp_quest/b03_q02_e01.jpg": "0ec9c1eaa09c8479f9c1c09981c3bdba",
"assets/assets/mvp_quest/b02_q04_c04.jpg": "4107f936173f9512fbdfcc2a54decb09",
"assets/assets/mvp_quest/b03_q03_e04.jpg": "9bffb2da5f3ad0714a3ea3a4ca82215c",
"assets/assets/mvp_quest/b03_q03_e05.jpg": "0a8b85c9ac3cf010a3199c07f6541fef",
"assets/assets/mvp_quest/b03_q03_c03.jpg": "3c13a88490d208075867e069907b7a34",
"assets/assets/mvp_quest/b02_q04_e03.jpg": "5bfd9eef6ef1a6368bbae12fc19f7694",
"assets/assets/mvp_quest/b02_q01.jpg": "cbef6d8b7cca0027aa8a902768069b26",
"assets/assets/mvp_quest/b01_q04_e03.jpg": "8844e509fe473ef40a8f77bfdefd621f",
"assets/assets/mvp_quest/b03_q04.jpg": "3417fc6468520199bc71b5be65172668",
"assets/assets/mvp_quest/b03_q01_c01.jpg": "69bba20ceff37e3b5dc0441cb2da4293",
"assets/assets/mvp_quest/b02_q06_e01.jpg": "685321d24ff251e95b7d52b8c2dab98e",
"assets/assets/mvp_quest/b01_q04_c04.jpg": "cb634d584050bf47e8d3f3851ee1b922",
"assets/assets/mvp_quest/b02_q06_c06.jpg": "fb32eaf583bdf1f9b734bbd7f15654ec",
"assets/assets/mvp_quest/b01_q04_e02.jpg": "bc338622b6e52f415af416281a6d9f6c",
"assets/assets/mvp_quest/b01_q05_e05.jpg": "16a88f6e9b14ac54c5f0cf9dfb78407c",
"assets/assets/mvp_quest/b02_q02.jpg": "70f3843da165f8f4eb5e974099323dee",
"assets/assets/mvp_quest/b03_q01_e04.jpg": "9bf85f3013f1aed1f517d79b92e250f7",
"assets/assets/mvp_quest/b04_q04_e05.jpg": "1330aeef9d4ea5c06e3351f1d5733eb4",
"assets/assets/mvp_quest/b02_q06_e02.jpg": "a306356d30c85944c4bbdabaf8ad2809",
"assets/assets/mvp_quest/b02_q06_e03.jpg": "6404b397ddeb1a4759b5cdda7e5626be",
"assets/assets/mvp_quest/b04_q04_e04.jpg": "0bb275a92eb209e3b715f2a7519c9d1c",
"assets/assets/mvp_quest/b03_q01_e05.jpg": "5e0d8fa1450678e8031512f16efceb11",
"assets/assets/mvp_quest/b01_q04_e01.jpg": "b6af7fc6dbc41cc063cf048ce18251de",
"assets/assets/mvp_quest/b02_q03.jpg": "4ead52d13d9324af1894cd4ed7837dc0",
"assets/assets/mvp_quest/b01_q05_e04.jpg": "af038cd10b932fe0fce9fc9feab75ab1",
"assets/assets/mvp_quest/b02_q07.jpg": "23968d51196041f73d68520035adb4e6",
"assets/assets/mvp_quest/b01_q04_e05.jpg": "c93a27679c2a8580ed1cfd63d6e2a0cf",
"assets/assets/mvp_quest/b03_q01_e01.jpg": "d39b7d1de05f40e08e38e9731e6a1e3d",
"assets/assets/mvp_quest/b03_q02.jpg": "d32c3a69709861d1a47592e51b464040",
"assets/assets/mvp_quest/b04_q04_e01.jpg": "4229c7c1b96ad7abd952beeacb10ba03",
"assets/assets/mvp_quest/b03_q03.jpg": "7dd6c0b5ca2caf1e71bfcc97e8405c85",
"assets/assets/mvp_quest/b01_q04_e04.jpg": "528b8e577b48e7c1b469666ca32c1699",
"assets/assets/mvp_quest/b02_q06.jpg": "7897fd2ec2cf64ba54715f79eec0e54c",
"assets/assets/mvp_quest/b01_q05_e01.jpg": "d3ba34fa83783b82314f338b20480fc9",
"assets/assets/mvp_quest/b01_q05_e03.jpg": "6cf8b08db95c9326913643cb9d85b7db",
"assets/assets/mvp_quest/b02_q04.jpg": "fc024b4005b9400c0a87f9e3eeebf824",
"assets/assets/mvp_quest/b02_q07_c07.jpg": "ea8b968770d75d3dd03752d75e0fae64",
"assets/assets/mvp_quest/b03_q01_e02.jpg": "45135b0b8c42f85a3f49fb4cea161e8b",
"assets/assets/mvp_quest/b03_q01.jpg": "99c71fb77ba496cc1fa16b968fba45fe",
"assets/assets/mvp_quest/b02_q06_e04.jpg": "b9ca08a0b681a907610f4ada40589932",
"assets/assets/mvp_quest/b04_q04_e03.jpg": "96703bd16c0edb404d7eec1da0be6b15",
"assets/assets/mvp_quest/b01_q05_c05.jpg": "6dc013d3575f98b851cf00d90d20c551",
"assets/assets/mvp_quest/b04_q04_e02.jpg": "b6335a08bed6b5edb50e79c137e3ae10",
"assets/assets/mvp_quest/b02_q06_e05.jpg": "c573790f4f5a41999309ac827d2251b9",
"assets/assets/mvp_quest/b04_q04_c04.jpg": "3f7f55a951e9391bb1fea95ac82047eb",
"assets/assets/mvp_quest/b03_q01_e03.jpg": "bf378a3db73386cb44438c5cdab65df4",
"assets/assets/mvp_quest/b02_q05.jpg": "96612a50744c01f197cbc6418eef65fc",
"assets/assets/mvp_quest/b01_q05_e02.jpg": "1576aa80fc62d00da6ad8dcb4b52d656",
"assets/assets/mvp_quest/b01_q01_c01.jpg": "b53cbf5f8a11c979f93f557f5b83b916",
"assets/assets/mvp_quest/b02_q03_e05.jpg": "0858264db3511303d3ba1e7b60d9f273",
"assets/assets/mvp_quest/b04_q01_e02.jpg": "d7b3d206dee6b73da5b3b3aee149d590",
"assets/assets/mvp_quest/b03_q04_e03.jpg": "b4ca61c6a6e87f994952ce8ec3d7f15a",
"assets/assets/mvp_quest/b02_q03_c03.jpg": "1e8edaaad0a5f63be1e83227a4900104",
"assets/assets/mvp_quest/b03_q04_e02.jpg": "586c4f7faad7e675202145c5ea39f4c4",
"assets/assets/mvp_quest/b04_q01_e03.jpg": "5f3a59fd93dc1547a2d505b5717229aa",
"assets/assets/mvp_quest/b02_q03_e04.jpg": "df1ef7fcb7237edf520bb171a1f4af50",
"assets/assets/mvp_quest/b03_q04_c04.jpg": "0e8a28eeb24073575c16e3d42ebb67fc",
"assets/assets/mvp_quest/b02_q02_e01.jpg": "0dd0b6693681b383f121f448b9aa0611",
"assets/assets/mvp_quest/b02_q02_e03.jpg": "50be5f201cb23bba09eb34343c7c02d8",
"assets/assets/mvp_quest/b04_q01_e01.jpg": "cc9591d4e3a4e6af60b19df4187304be",
"assets/assets/mvp_quest/b03_q04_e01.jpg": "5727873174a3ac40629092a510b12009",
"assets/assets/mvp_quest/b02_concept01.jpg": "63d0c3a7d88cf545345db7d763bd1a77",
"assets/assets/mvp_quest/b02_q02_e02.jpg": "2154dca474577eb923adc0dde8fbc1bb",
"assets/assets/mvp_quest/b04_q01_e04.jpg": "bba4f474f6d3cff315d8286e4336a4df",
"assets/assets/mvp_quest/b02_q03_e03.jpg": "87d415cb01b6694fb5f811a06f267df3",
"assets/assets/mvp_quest/b03_q04_e05.jpg": "8f8443c8130f7be78cab11bd3da62215",
"assets/assets/mvp_quest/b03_q04_e04.jpg": "0dd80c1b5660d55b7b25e678e8712c89",
"assets/assets/mvp_quest/b02_q03_e02.jpg": "ed648153fac5e333a62187cecfc1a610",
"assets/assets/mvp_quest/b04_q01_e05.jpg": "9450306847c6ab52ff871bed73cb4076",
"assets/assets/mvp_quest/b01_concept01.jpg": "ba6e3096783e8e6676b1a4ecc7f6fac7",
"assets/assets/mvp_quest/b02_q02_e05.jpg": "c4f28edebfd930e932ffd17b67e42722",
"assets/assets/mvp_quest/b04_q01_c01.jpg": "46a71e1433c44cac81db1706f3080b96",
"assets/assets/mvp_quest/b02_q02_c02.jpg": "ac6dbcaaf58d373685136f51d0c3a06e",
"assets/assets/mvp_quest/b02_q03_e01.jpg": "4bcc53a93108ab526a6635f1c02bce1c",
"assets/assets/mvp_quest/b02_q02_e04.jpg": "9268fd82198689ffc4c6141f3c75e768",
"assets/assets/mvp_quest/b01_q03_e01.jpg": "0a14c0f6827f65506ac1c41ec28efb24",
"assets/assets/mvp_quest/b01_q02_e04.jpg": "a67b72bc05e5bcd804db8ca1c43bdc35",
"assets/assets/mvp_quest/b04_q02_e01.jpg": "da997ef4794ee771d7ab99a947bddc35",
"assets/assets/mvp_quest/b01_q02_c02.jpg": "da87c66fcd5ee3d1fbe6fdecce7ce39a",
"assets/assets/mvp_quest/b02_q01_e03.jpg": "ff55be4ea7f93c704ec18642a0d074d6",
"assets/assets/mvp_quest/b02_q01_e02.jpg": "8fca2b175ab316c74da04a425d5a2d15",
"assets/assets/mvp_quest/b01_q02_e05.jpg": "0946b2ac6b89a52b98c01de631dd33f0",
"assets/assets/mvp_quest/b04_q03_c03.jpg": "04a2ebf5da2b0f661758ecfc7c695453",
"assets/assets/mvp_quest/b01_q03_e02.jpg": "3738a6812c89d7ce3b754b1cf2664744",
"assets/assets/mvp_quest/b04_q03_a03.jpg": "088853c98d3d9bcccd2a74965f548566",
"assets/assets/mvp_quest/b04_q02_e02.jpg": "1b7354fa10f0fd9ec0e7dbae1a95b960",
"assets/assets/mvp_quest/b02_q01_e01.jpg": "3ea97891a8a0f58a6c58ab5ab682276d",
"assets/assets/mvp_quest/b04_q02_e03.jpg": "aac24287268d6f7677ef9d27f9ee3754",
"assets/assets/mvp_quest/b01_q03_e03.jpg": "8e9a287b2aa47d6a53bcffe10f077f4e",
"assets/assets/mvp_quest/b04_q04.jpg": "c2dd252884425773c80ca914845dc994",
"assets/assets/mvp_quest/b01_q02_e02.jpg": "80b3f8d8384daa01c8be1925af17db15",
"assets/assets/mvp_quest/b02_q01_e05.jpg": "0e7210582cd335618ce53629328cdcc3",
"assets/assets/mvp_quest/b02_q01_e04.jpg": "4412bf6c86ff9cfe1cabdb714fc8de0a",
"assets/assets/mvp_quest/b01_q02_e03.jpg": "4839eddcfcbd6a5cd487074a5958615f",
"assets/assets/mvp_quest/b04_q01.jpg": "311b44daa831ca18914ac6ddbdcdab73",
"assets/assets/mvp_quest/b04_q03.jpg": "0229faa60e718395228bb333e357ca88",
"assets/assets/mvp_quest/b01_q03_e04.jpg": "091155a2f9a1cee39b257771c7cc7560",
"assets/assets/mvp_quest/b04_q02_c02.jpg": "2c43134f8c0ee3f57d68abc5926a117c",
"assets/assets/mvp_quest/b01_q02_e01.jpg": "a8d926f1b63476a7efe0ac679ef6e7ba",
"assets/assets/mvp_quest/b04_q02_e04.jpg": "414525466436115567d96a2b4649f7f2",
"assets/assets/mvp_quest/b01_q03_c03.jpg": "e9cfca326f76e3aa714be6241eec5e16",
"assets/assets/mvp_quest/b04_q02_e05.jpg": "f49483e52f2b357f13cf1c4fe74f88cc",
"assets/assets/mvp_quest/b01_q03_e05.jpg": "45b4426aded00168e5ec654b8e4bb7d7",
"assets/assets/mvp_quest/b02_q01_c01.jpg": "b4710bee8dc9fbf99927fa9019c3dda2",
"assets/assets/mvp_quest/b04_q02.jpg": "74ef0393cffdf55f1d58039296fbe5e5",
"assets/assets/font/CustomIcons.ttf": "b36669a4e804459ce547314ae0a7e9c4"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
