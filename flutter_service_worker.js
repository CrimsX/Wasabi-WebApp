'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"main.dart.js": "d8a4b9d181b5b383d2babf3c61052bea",
"version.json": "6dfbd941664e53f6173f53383139b86c",
"assets/assets/Wasabi.png": "85b37b115f1a7ef8662090c8f9a04f6e",
"assets/assets/WasabiIcon.png": "b38dd20c545e2d538923cf73a47d589d",
"assets/assets/Hi.png": "5fc84c116f45f0e9a452e4eef2899372",
"assets/assets/Welcome.png": "2eab2c215562d3da87c016362d81a516",
"assets/assets/FileEdit.webp": "52a97afbb6652a59bc5d4715cf95efe7",
"assets/assets/DrawingImage.webp": "2348818429a218d4e5dfffa40bf73bbb",
"assets/assets/PowerpointImage.webp": "761048816db452b08a387a303b4cbfc5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "39e100c31980f4ec06b555d9c33e6c44",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "76bd55cc08e511bb603cc53003b81051",
"assets/fonts/MaterialIcons-Regular.otf": "a5ceddf7e3a1e3089eb3a9f29a8a419a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "98c4604ceaa396fb7c7cb1c10249a25b",
"assets/AssetManifest.bin": "8daba4dbc898c6875baed238de488057",
"assets/AssetManifest.bin.json": "79f38ac596d2580e6908bd5e637ffe53",
"assets/FontManifest.json": "7df10702a8c60a62e6694f43081d46e7",
"assets/NOTICES": "44659cf3221d74d48694465ba05dd1fd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"manifest.json": "46e453a3d558f5da6368a76c3e7ac593",
".git/hooks/applypatch-msg.sample": "4e33b997d7d5d5274c56bbf61f0c0bf9",
".git/hooks/commit-msg.sample": "89cb67435d2c1b9503e32d599d72713c",
".git/hooks/post-update.sample": "be48e56d8b9f9108aa4ecb32dd12d435",
".git/hooks/pre-applypatch.sample": "1f6a74774ee63312b4ad8a8c6ec7f2e8",
".git/hooks/pre-commit.sample": "3ba41bb5b6fe126be0c04c17ceb564ff",
".git/hooks/pre-merge-commit.sample": "f9d3ac247a941cf41ceb86048c699cfe",
".git/hooks/pre-push.sample": "a5a56d58c7133331b00b520ea5548074",
".git/hooks/pre-receive.sample": "c5e60ee055ef7b920a10b2871b1790a2",
".git/hooks/push-to-checkout.sample": "d8204d74ffd9ca215d1687eaca1e9e5b",
".git/hooks/sendemail-validate.sample": "c4c26785acacb2553117cf802723d09f",
".git/hooks/update.sample": "edce28be0c66a0a19729dc76f8143916",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-rebase.sample": "0d4f0a0a63c6a1cbbf0a8b410b9e3c59",
".git/hooks/prepare-commit-msg.sample": "529551eb02ce07d5a84df03a8361e155",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/heads/master": "acb67a6394ae3bbaf00eb21963afdef3",
".git/refs/heads/2024-04-03": "acb67a6394ae3bbaf00eb21963afdef3",
".git/refs/heads/main": "1973509ab5a6e36ca5358db0ef9bff3a",
".git/refs/remotes/origin/2024-02-13": "d8e971355dfc666deddbaf1338e038fc",
".git/refs/remotes/origin/ipfix": "a299b890c4356c82960358e974b673c6",
".git/refs/remotes/origin/master": "de91a91b6ab267f44874ab084c98e2d4",
".git/refs/remotes/origin/2024-04-03": "acb67a6394ae3bbaf00eb21963afdef3",
".git/refs/remotes/origin/main": "1973509ab5a6e36ca5358db0ef9bff3a",
".git/objects/c8/e879d769e628010da7da46167c088fe8c1d28a": "92a48e56d128df318d8a0839179f6398",
".git/objects/90/627a910605792e003250af3f84fa60ba7de6a3": "c248d219a93c50a13232a4db237a051c",
".git/objects/74/b32e1083d67108882f351ae597ed09ec1dbd15": "ce96698b6b70ab4f8f74c40c61b7d53d",
".git/objects/d1/bd93b5fe244cfbf6c9d3a6e1b2656643bdc02f": "47fb099af496c22e3f32dcbd45bc014f",
".git/objects/af/901332cf971b2a371e9d79b8054d2c3e25ed79": "d708b1a9b79517ebb94ec11305ac6cb3",
".git/objects/af/3220e193a396795a9081ff15bfa3a3d7c36fb6": "03ccf9f264e1d700b1938d132320c5fb",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/de/25bb4b1d1d893251191d941f09ffb57156e57b": "ca8502b753e1091ab3b2f2a35cfad7a1",
".git/objects/00/02b794cd5dca61c291fde0c14d900ecd22f014": "3bab0b2962cd86d810cf84ed3e3afb4e",
".git/objects/00/4a1bbb6c777eaa5bb9f3f4499b5798989c5f24": "201e22b095ea93d41e82582249a921c8",
".git/objects/00/344676ca8e0fecd4e77b19dfb0d24d095e55a9": "86398a89a939c22426b63b475d32e3d8",
".git/objects/c9/5b31613b20e1f8ac9d8d1f27f3182d0f2f14c5": "f70e90060cfb014ec171367df3c5f420",
".git/objects/7d/bac01f2d96c1c1246754f2a283c337c6efd299": "d9ee73cf7c94f8716d6beab6cfa5a8e7",
".git/objects/51/ce02f616fb521e8382c78157eab13e56d27677": "340d3da88d2d1bc1cc5894609c6382ae",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/91/9b58c60b938f7b1a8f2ff3113ec5941c60f752": "67e8d0260c418df036d0f4ca4469f99e",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/1600abdb5f665aa28a2cc5389ec3003d087125": "f3a6ba16263229a4cf8655ece22fdf38",
".git/objects/48/1a7acb17279a7e8f38d0be7576fe8fd9cfa542": "382c9f06b5b0eaf7d1e7b050adc03027",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/918addcfeef5a6b64d85b2f2c4062a66ac7ecd": "03028919222b5b94c19ba8a4942ae8c1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/05/5e7a51216cb904db5fdfd7a92bc7ba987edc29": "5cc336bb8eb472368683c67f43bd1dcd",
".git/objects/05/f17e35a3d913a914d3fe8c823a242a9b9b3c98": "a0553381c37423a16c41bf3389c269f1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/d1be1195aeef8d64374e961f29ac26b7da2c75": "6f58888399885605c63cae31e579b85a",
".git/objects/10/8dc442a0c81ac22eba262c25caabc311afe8a8": "b98a7f418b9c8c778aaa8bceec6ec11d",
".git/objects/a7/e679d3d01038206006421e9d754294f0755ddc": "14cb567ae1cd7fe9f8be1df59be264db",
".git/objects/55/4b75eeca8f019e8ae8566fc9393c76e1a28943": "2710468dd823381178d8d07574bf5953",
".git/objects/99/dea97b678af159e8958bd5cc923741127af642": "8a8bd3faec48203a486ff6a7349a43cd",
".git/objects/30/36c9c1a0ddc867b617ca2d4efa16a43846f11d": "09f354a28053b72f66c63db2edf17e46",
".git/objects/b5/64881a57631c97f6d050eb6dc1cd4285e8abfb": "4edc85e460cae2db414fb2f33da769ad",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/8b/9afefa6cd990096a726eefc514873685daeb69": "c3657d622ae60d4342c49345d0aaf9a5",
".git/objects/7b/2bd4b9915b75b247887eb4d12be9915281deda": "29a2c7c606bc171c464e070f353dc25d",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/f4/92dcbae2f260cc7875148cb3b48cc2da9f26a4": "3f13538b0059d2b216ca53d5fc73b916",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/92/5ada374de32999bb83cb1372d0b56d4fff4db1": "02c30cd799f9fa98cbcec288b295f510",
".git/objects/27/f3dc87f5a69f401ac41c9cfa4080e882881159": "a8452a9f43cf5a810a612224fd44b2d3",
".git/objects/15/ed6da8436834e91c6477642891605f202b8345": "5f83b151b9710f2803877a6e15db50c8",
".git/objects/18/acada3f4b98931359328dc92792eb3eaf630fc": "6764e88b2b5ff7cd8e893a01241fff63",
".git/objects/fe/9f80041e1c2930dca9f18f6cee8d7c4c766ab2": "7a2aaa318b477f11dcafc909fc5c531b",
".git/objects/fe/6893b47f64190d4b1d85a73bdc78324d663def": "d6d002a7a7e60f1435714808378ee0da",
".git/objects/fc/1563e600de4e5b7e835f0dc91ba43f5f0a026b": "e08ab2efb158e8063205371d24dc7158",
".git/objects/fc/71eec0cd3deba2b15e970eca7a7909fb73d981": "497763e41f33be0dcb8c45169dec3a58",
".git/objects/c1/a751c31c03b6c836ac94bc3adc8fea0b22827d": "576f5d9c60e56fc3d0c8069bf8a443e1",
".git/objects/c1/7b1047fc4f1309c16b633e0b79bc6379238100": "218d8b469d3204240612406af87204a4",
".git/objects/79/7219624f86ddf20e9959a9b7273756a4d943d1": "316f59fe43c5338f8ab31a85d5d29880",
".git/objects/e4/62e65f570c025191614490c5809c7037887f08": "96cc777b3be5bb1346162adb1b2aa5d5",
".git/objects/9e/4689ce0fa6ae1b73a487f5f1f2cb70f77f59b9": "93884ceee38c913521c14a3d6d52b997",
".git/objects/dc/2db5ddd01a6a2efc6594c97e64a4d5cd47ad92": "fb61c0373a13e17d6b65b21336ffbee2",
".git/objects/b6/177b0444f23da581611220dd8e4fecbe408945": "10a54983753fa30e07666308d11ee7e0",
".git/objects/76/921bf124546aca4f25cee2ec4dd4ac8d09a594": "aee8351a6ea9c0d15405703d428e52fd",
".git/objects/76/0e864adcc3a2282452c94d9c855f405fa06f8f": "331987ea2450c444652452a56386c16c",
".git/objects/ad/551cefddb26f48ba703716ac0addd41bbb7b33": "75e25260551ac38e31a36d0c77dafa71",
".git/objects/a1/ed4a33ac9a64f25cdcde510ddb8fa5a0f2ebce": "6875aace747d628d9470c2d1171faf44",
".git/objects/cf/589e7a0aa191430c6640936b4f64623db2f930": "3e64ce4063f0f355f221926d23670881",
".git/objects/cf/1825449e6a82f0df93d8569981e6cb7a4513a2": "4d35374547faa89c676987ce6dcf8c58",
".git/objects/84/25c40c94c77e5032a7efb9c832131ab30afa9c": "3d52623067fa09d51e31b1b41e184025",
".git/objects/24/be1f1b8c817b846166f3ca9781375b5688fe2f": "a4b422a348bc123c0c15e2f1b77e80be",
".git/objects/f5/f626d72adf86c5dfa58ecc093186228ea24769": "57e59f647b463b98166cb7ec554efdf1",
".git/objects/d8/23edff3745976ea24db474b673d47fb7ca1c24": "02449c19f1ffefe06bc52cf317d0abbb",
".git/objects/f8/f5fc0864ca3b06ac70b24d8022d6da00f022b6": "db37b2d044fb8bc90e7ac7cf8f57082b",
".git/objects/32/bfd31c29549e42cd7661f0f6ec90a48092435c": "6f83a702cdd79e0fd90e0e24ccf63c53",
".git/objects/26/d1baf30be8228bd1c6953ec3961f8320160baf": "1c5cf7b269b4b50ceed406ba374be4f3",
".git/objects/f3/918414d7273a49317dbaa1620218692fa8e515": "b6b000f9a10f9df0dbee20631051c572",
".git/objects/5c/269d61be5a7fad8ad1ae69036a994a64f67c65": "c9b7843a436912bd1f9336b6a7186f33",
".git/objects/f9/1cc0771717e82affdf346ef7ea5919439d5fbe": "5adbdd56a7710fab184d35ac3af801bd",
".git/objects/65/7f50d9daa2ee25a581d98517b5db3eda60226f": "05aa2fc5f7ef351d3612e60d790691ba",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/07/e11b288091e6c85a944d9c0cea5b93e76199be": "8aa654e3f7df5a5c608836bbe21fe6cd",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/39/39570cd1bb4354824bbcc39079ff91e7091bdb": "a8788fb5d83526307eb397fef30f9321",
".git/objects/39/87e69430973c77ddbcc0394dde8a7c35d1e0b9": "beb854d0044a69c74f887a4f59c6dd94",
".git/objects/03/22252b29bce5a0465a64e759b73908ed4cad2c": "21be2d398e3f72f5205281e4445d6077",
".git/objects/8e/b8f4213303586eff7e7fc30003360f6031eef4": "cdfbd2959a8ec1a406ed5d54dc6d421c",
".git/objects/b4/8f6cc2b1211ad4c6be77a50b3f4cb4ca3fc7d5": "ba7d6a4143b50b029055dfe65c450125",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/fb/d091a5e80ce99ae724aeb3e1c11675995ea52e": "fcd57d2990c2b0f185adae326fb546d4",
".git/objects/6b/f733c37dbc009e256458e87a0d07b4a4621134": "73c26b02bc56169b948e9ce48f7b5df3",
".git/objects/62/a6047dad6fe618e714f0886ad76d543021b25d": "245a49f81310d7555ace6bf429b0f806",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/9a/aa545b8124d99d34ec4db967c7e7ae59252bb8": "b1aa66925b258d9b4925282476f9396a",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/7c/dcb2ff6de8c3ea43a8ee6ab76e7d31725a5ae8": "ac4cb018eebc828212dd605210d03472",
".git/objects/cc/7289b5e970ad144f76dd9573afb445ec87038a": "a1d01f801231d09d2d612232c5bcd2e9",
".git/objects/70/addf051cd6da7ac6a316cd4c32b5a46282adec": "2f673f2ffbb27048ac2552d40b527835",
".git/objects/50/bb70686cb1e2a3f7965c02ede4766524f78924": "2565a131c2b2d55669002c5830fbe957",
".git/objects/f1/745c56ee19b9121975f33e4895a8372a5875db": "ecfca3d0a99c59919a239815e0fe04c0",
".git/objects/a8/a3dab20f987c9b22457452b2644a61424655a4": "1cbe90e41bf7607f0c7554035d224e36",
".git/objects/c4/750ee399cf16bf3c28d824b6f04896d5665122": "7dd0431524888848adf85fae875a9ec5",
".git/objects/19/b5bd922852cf125ccd7f1394a549837981c75d": "cd19fbe25c42ed42d5006744b4a908b5",
".git/COMMIT_EDITMSG": "52e0b449eca3b68f66e59c05854368f9",
".git/logs/HEAD": "f03a83e6cbfda791c55ab9f60a3ce0ce",
".git/logs/refs/heads/master": "3e6f7df19bdc44808a935653c6c98692",
".git/logs/refs/heads/2024-04-03": "fe3045ae71daaa1414c7f7261dd56061",
".git/logs/refs/heads/main": "f53982b4402ce10fa81b22e0b59d7bd4",
".git/logs/refs/remotes/origin/master": "f5b83b506bb5ef42d12e2eb74bc4c76e",
".git/logs/refs/remotes/origin/2024-02-13": "5b64ebb61d5488f3f957c912610fcbbb",
".git/logs/refs/remotes/origin/ipfix": "eeede7b04bc726173f5bd05c2d75f293",
".git/logs/refs/remotes/origin/2024-04-03": "3ca48247c4480223eec7259adab0f393",
".git/logs/refs/remotes/origin/main": "7f91e0c4bdec92641a667c16860303de",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/FETCH_HEAD": "83edb44c884819b91f623432cc871e4c",
".git/config": "5d39018d6a9f9bac770d9b7b86d6ee08",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/index": "3f87ae83c5b5924920b0bae92ad294b2",
"index.html": "46ccc5860b8d27eabba9763ef39dc1ce",
"/": "46ccc5860b8d27eabba9763ef39dc1ce"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
