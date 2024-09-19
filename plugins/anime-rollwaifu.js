var handler = async (m, { text,  usedPrefix, command }) => {

//rollwaifus
const waifus = [
    { "name": "Goku SuperSaiyajin Dios", "url": "https://telegra.ph/file/7ff0d24c311ac79ac9ca6.jpg", "value": 1500 },
    { "name": "Goku SuperSaiyajin Dios SuperSaiyajin (Blue)", "url": "https://telegra.ph/file/23760c3f80da6165c5971.jpg", "value": 2200 },
    { "name": "Goku Ultra Instinto Señal", "url": "https://telegra.ph/file/453136f3d3d9fbbd95882.png", "value": 2500 },
    { "name": "Goku Ultra Instinto", "url": "https://telegra.ph/file/89b97b333a3cbd7149135.jpg", "value": 3000 },
    { "name": "Mr. Satán", "url": "https://telegra.ph/file/56e6f841335018bc123bc.png", "value": 1000 },
    { "name": "Maestro Roshi", "url": "https://telegra.ph/file/4734384140edd359b7053.jpg", "value": 2500 },
    { "name": "Yamcha", "url": "https://telegra.ph/file/98fae2b7ff3f2a0b99bdc.jpg", "value": 1200 },
    { "name": "Bulma", "url": "https://telegra.ph/file/e3772ee966a3cabde2524.jpg", "value": 800 },
    { "name": "Chi-Chi", "url": "https://telegra.ph/file/e4f41f81211bba653dbed.png", "value": 900 },
    { "name": "Spider-Man (Ultimate)", "url": "https://telegra.ph/file/cd557df768fcbea216b0e.jpg", "value": 2000 },
    { "name": "Spider-Man (Andrew Garfield)", "url": "https://telegra.ph/file/27f948a88b0a8e0c9b0d2.jpg", "value": 1700 },
    { "name": "Spider-Man (Tobey Maguire)", "url": "https://telegra.ph/file/328315f50b3ad146a37e1.jpg", "value": 2200 },
    { "name": "Hoyuelo", "url": "https://telegra.ph/file/465c812d78ef6ce897a84.jpg", "value": 2500 },
    { "name": "Teruki Hanazawa", "url": "https://telegra.ph/file/9cd2530f67dcc05d5d8af.jpg", "value": 3500 },
    { "name": "Yunyun", "url": "https://telegra.ph/file/6a0e3cb925538bb61d9e8.jpg", "value": 2000 },
    { "name": "Wiz", "url": "https://telegra.ph/file/88663a62013542b14b318.jpg", "value": 2000 },
    { "name": "Yuji Itadori", "url": "https://telegra.ph/file/e35f8506b72c4b7d40c3e.jpg", "value": 5000 },
    { "name": "Megumi Fushiguro", "url": "https://telegra.ph/file/2d5a192820c20e9bd0ed7.jpg", "value": 4500 },
    { "name": "Nobara Kugisaki", "url": "https://telegra.ph/file/51038bacc75119474bd2f.png", "value": 3000 },
    { "name": "Sukuna", "url": "https://telegra.ph/file/6e0be6d5fcd173c5e3ea3.png", "value": 1000 },
    { "name": "Aki Hayakawa", "url": "https://telegra.ph/file/2c1bcf3f3970ba036dda9.jpg", "value": 2500 },
    { "name": "Franky Franklin", "url": "https://telegra.ph/file/9c85214ef4f887ecf6086.png", "value": 1500 },
    { "name": "Aijou Rentarou", "url": "https://telegra.ph/file/7480cede665df35f8a2be.jpg", "value": 1000 },
    { "name": "Hanazono Hakari", "url": "https://telegra.ph/file/5814e05ec099516038917.png", "value": 1000 },
    { "name": "Yoshimoto Shizuka", "url": "https://telegra.ph/file/a8cf22778252ef3f79478.png", "value": 1000 },
    { "name": "Eiai Nano", "url": "https://telegra.ph/file/04280e074fb133e2e2242.jpg", "value": 1000 },
    { "name": "Inda Karane", "url": "https://telegra.ph/file/a565cd699305c5ba29916.jpg", "value": 1000 },
    { "name": "Goku Black SSJ Rose", "url": "https://telegra.ph/file/35cf0c9de0f998f3b340c.png", "value": 9500 },
    { "name": "Miku Nakano", "url": "https://telegra.ph/file/98bb050b98e30e8e05cb5.jpg", "value": 8000 },
    { "name": "Nino Nakano", "url": "https://telegra.ph/file/3ad948f06319b86453f42.jpg", "value": 2000 },
    { "name": "Ichika", "url": "https://telegra.ph/file/5315312baf1e2ef418230.jpg", "value": 4151 },
    { "name": "Yotsuba Nakano", "url": "https://telegra.ph/file/88cb390aadbf5119847be.jpg", "value": 3000 },
    { "name": "Itsuki Nakano", "url": "https://telegra.ph/file/f2a2e9742f4cb357383bb.jpg", "value": 1654 },
    { "name": "Tanjiro Kamado", "url": "https://telegra.ph/file/4391227747bd056ed5f81.jpg", "value": 1000 },
    { "name": "Zenitsu Agatsuma", "url": "https://telegra.ph/file/2abd28afabc0ef7b7c8f3.jpg", "value": 1111 },
    { "name": "Kanao Tsuyuri", "url": "https://telegra.ph/file/580737e459e06244640d3.jpg", "value": 3040 },
    { "name": "Sanemi Shinazugawa", "url": "https://telegra.ph/file/cfd9ea458482d1a29ce5a.jpg", "value": 3500 },
    { "name": "Granolah", "url": "https://telegra.ph/file/8acfd836e485bfe3c2d48.jpg", "value": 4321 },
    { "name": "Moro", "url": "https://telegra.ph/file/abe8c301259189ff285d5.jpg", "value": 2500 },
    { "name": "Totomaru Isshiki", "url": "https://telegra.ph/file/5e609d403686045b0fe47.jpg", "value": 2500 },
    { "name": "Ron Kamono Hashi", "url": "https://telegra.ph/file/bb6dde067aba3569b4ae9.jpg", "value": 1800 },
    { "name": "Gohan Beast", "url": "https://telegra.ph/file/2eec6af74dea3f4609fdc.jpg", "value": 2500 },
    { "name": "Super Vegeta", "url": "https://telegra.ph/file/e226cde2c029bc9e2dc12.jpg", "value": 5000 },
    { "name": "Muzan Kibutsuji", "url": "https://telegra.ph/file/530d49527e1ddf65fe519.jpg", "value": 2000 },
    { "name": "Inosuke Hashibira", "url": "https://telegra.ph/file/cfd9ea458482d1a29ce5a.jpg", "value": 2000 },
    { "name": "Genya Shinazugawa", "url": "https://telegra.ph/file/1da14e6bb06a97c0e5553.jpg", "value": 1679 },
    { "name": "Giyū Tomioka", "url": "https://telegra.ph/file/10f92ffc33767c7fe965f.jpg", "value": 1000 },
    { "name": "Akaza", "url": "https://telegra.ph/file/02bad2b98ee449492f0c3.jpg", "value": 2500 },
    { "name": "Muichiro Tokito", "url": "https://telegra.ph/file/c77283b318d5532243d02.jpg", "value": 3000 },
    { "name": "L", "url": "https://telegra.ph/file/215cbf45c62bff55bbd4d.jpg", "value": 6000 },
    { "name": "Ryuk", "url": "https://telegra.ph/file/40948866890170035dcd4.jpg", "value": 3500 },
    { "name": "Tatsumaki", "url": "https://telegra.ph/file/1a5739353a684b67bb659.jpg", "value": 5000 },
    { "name": "Garou", "url": "https://telegra.ph/file/e7790a87844780a9ba9c6.jpg", "value": 1500 },
    { "name": "Yuta Okkotsu", "url": "https://telegra.ph/file/13df0c1932e60d0615b24.jpg", "value": 1550 },
    { "name": "Aoi Todo", "url": "https://telegra.ph/file/087713c4d453eb223ad9f.jpg", "value": 1550 },
    { "name": "Suguru Geto", "url": "https://telegra.ph/file/40495064ef201148000c7.jpg", "value": 1800 },
    { "name": "Superman", "url": "https://telegra.ph/file/b610062abfa7aa1d3ac2b.jpg", "value": 8500 },
    { "name": "Majin Vegeta", "url": "https://telegra.ph/file/7b8e90620cfb14816db77.jpg", "value": 4000 },
    { "name": "Golden Freezer", "url": "https://telegra.ph/file/284032b8e6f4a0c01269a.jpg", "value": 4800 },
    { "name": "Black Freezer", "url": "https://telegra.ph/file/87ebe95b3385217cb8aed.jpg", "value": 2500 },
    { "name": "Hitori Gotoh (Bocchi)", "url": "https://telegra.ph/file/972aa04d2c176771e3441.png", "value": 5500 },
    { "name": "Orange Piccolo", "url": "https://telegra.ph/file/4e483207c7190ab992450.png", "value": 2001 },
    { "name": "Escanor", "url": "https://telegra.ph/file/ed80dc97e666698bb0d1e.png", "value": 1005 },
    { "name": "Senku Ishigami", "url": "https://telegra.ph/file/9e2f026a6c19c955a6afd.jpg", "value": 1000 },
    { "name": "Taiju Oki", "url": "https://telegra.ph/file/10b01cf2d957b2fffd219.jpg", "value": 800 },
    { "name": "Yuzuriha Ogawa", "url": "https://telegra.ph/file/32954b7b2cd933be2386e.jpg", "value": 600 },
    { "name": "Tsukasa Shishio", "url": "https://telegra.ph/file/6cba2d858e9159ea5a38e.jpg", "value": 1000 },
    { "name": "Gen Asagiri", "url": "https://telegra.ph/file/aa827f417bb974890314e.jpg", "value": 800 },
    { "name": "Chrome", "url": "https://telegra.ph/file/26ddac9ca9862e1eed4fe.jpg", "value": 500 },
    { "name": "Kohaku", "url": "https://telegra.ph/file/13f5372276ceb0700a48c.jpg", "value": 1000 },
    { "name": "Suika", "url": "https://telegra.ph/file/b91c351cf6323d08ddffd.jpg", "value": 600 },
    { "name": "Ginro", "url": "https://telegra.ph/file/867f88e7526b2b9c50074.jpg", "value": 500 },
    { "name": "Kinro", "url": "https://telegra.ph/file/b6bca94d54f52e0948caa.jpg", "value": 600 },
    { "name": "Kaseki", "url": "https://telegra.ph/file/89f0c765d9bc1b3988e5b.jpg", "value": 800 },
    { "name": "Ruri", "url": "https://telegra.ph/file/2f48f1d272b2bddbec445.jpg", "value": 1000 },
    { "name": "Hyoga", "url": "https://telegra.ph/file/14fb0e962372c8bb0b955.jpg", "value": 1000 },
    { "name": "Homura Momiji", "url": "https://telegra.ph/file/d14ed935a98a90a2b5ebb.jpg", "value": 800 },
    { "name": "Nikki Hanada", "url": "https://telegra.ph/file/6a93133944ef05bc2940d.jpg", "value": 600 },
    { "name": "Ukyo Saionji", "url": "https://telegra.ph/file/3b0c73c4f48c5843a8725.jpg", "value": 800 },
    { "name": "Ryusui Nanami", "url": "https://telegra.ph/file/fef829c77c0c389463c9e.jpg", "value": 1000 },
    { "name": "Francois", "url": "https://telegra.ph/file/b2b57c3bd326977630238.jpg", "value": 600 },
    { "name": "Moz", "url": "https://telegra.ph/file/c8ceef6f006395ba59703.jpg", "value": 500 },
    { "name": "Magma", "url": "https://telegra.ph/file/3ced9cc36932fbb10db39.jpg", "value": 500 },
    { "name": "Jasper", "url": "https://telegra.ph/file/9344eb06bc997ea739e25.jpg", "value": 600 },
    { "name": "Soyuz", "url": "https://telegra.ph/file/ccedd5e8a35a7059b8c07.jpg", "value": 800 },
    { "name": "Kirisame", "url": "https://telegra.ph/file/be8b2e23de70496df69be.jpg", "value": 1000 },
    { "name": "Ibara", "url": "https://telegra.ph/file/36da8af0aba03ae544e32.jpg", "value": 1000 },
    { "name": "Stanley Snyder", "url": "https://telegra.ph/file/cb2b3704c80889650bfa2.jpg", "value": 1000 },
    { "name": "Luna Wright", "url": "https://telegra.ph/file/63d540217f0b903e3c2f7.jpg", "value": 800 },
    { "name": "Carlos Barrios", "url": "https://telegra.ph/file/435092045fdda56b4187e.jpg", "value": 600 },
    { "name": "Max Adams", "url": "https://telegra.ph/file/6a439c35b0536b919dfde.jpg", "value": 500 },
    { "name": "Byakuya Ishigami", "url": "https://telegra.ph/file/ca2dd53a11694f6172dc2.jpg", "value": 1000 },
    { "name": "Lillian Weinberg", "url": "https://telegra.ph/file/8ae0cd2f092224cecf409.jpg", "value": 800 },
    { "name": "Connie Lee", "url": "https://telegra.ph/file/ca64cb081ca061aa8853d.jpg", "value": 600 },
    { "name": "Shamil Volkov", "url": "https://telegra.ph/file/5a4ba4f5d9acdb63fa254.jpg", "value": 500 },
    { "name": "Darya Nikitina", "url": "https://telegra.ph/file/4b913903fbe7ac64aac22.jpg", "value": 600 },
    { "name": "Yakov Nikitin", "url": "https://telegra.ph/file/9eda25294658a43f04cb8.jpg", "value": 800 },
    { "name": "Rei", "url": "https://telegra.ph/file/de9847888f3088fb5b93d.jpg", "value": 1000 },
    { "name": "Maya Biggs", "url": "https://telegra.ph/file/a08afa5e78b83622d11f0.jpg", "value": 500 },
    { "name": "Brody Dudley", "url": "https://telegra.ph/file/2a8618cbf7b42b4774c6c.jpg", "value": 600 },
    { "name": "Mirai Shishio", "url": "https://telegra.ph/file/2f69a88617637ccac3b61.jpg", "value": 600 },
    { "name": "Matsukaze", "url": "https://telegra.ph/file/722b45db3c13e34317207.jpg", "value": 800 },
    { "name": "Oarashi", "url": "https://telegra.ph/file/e600b70e7bdfac693d44d.jpg", "value": 500 },
    { "name": "Why-man", "url": "https://telegra.ph/file/d8f375c2adc85d79bcd28.jpg", "value": 1000 },
    { "name": "Tailina", "url": "https://telegra.ph/file/b08083952910ca356db64.jpg", "value": 1236 },
    { "name": "Jinna", "url": "https://telegra.ph/file/b3c2209eecf462ec1c3eb.jpg", "value": 2646 },
    { "name": "Zion Hari", "url": "https://telegra.ph/file/42996134622f2c1ae1750.jpg", "value": 3474 },
    { "name": "Takashima", "url": "https://telegra.ph/file/6b8579c59521b67e25448.jpg", "value": 3157 },
    { "name": "Takamizawa", "url": "https://telegra.ph/file/0279bfa57c422762f96ab.jpg", "value": 4617 },
    { "name": "Kitashima", "url": "https://telegra.ph/file/2469e73d9d518738435bd.jpg", "value": 4631 },
    { "name": "Yakushiji", "url": "https://telegra.ph/file/76c069318fb059a711210.jpg", "value": 3784 },
    { "name": "Hiragi", "url": "https://telegra.ph/file/e3ca8e3335448deb52f64.jpg", "value": 1635 },
    { "name": "Stratus", "url": "https://telegra.ph/file/3146404b0ae154ae42a0e.jpg", "value": 1641 },
    { "name": "Yuiki", "url": "https://telegra.ph/file/3dc916bd4e72a4c1beb71.jpg", "value": 5441 },
    { "name": "Kuujou", "url": "https://telegra.ph/file/8a65bfea0a488cd5ebfff.jpg", "value": 4133 },
    { "name": "Shimazu", "url": "https://telegra.ph/file/18439899b65d0e5458a59.jpg", "value": 3154 },
    { "name": "Youko", "url": "https://telegra.ph/file/34ca0c6d98101040f7700.jpg", "value": 1647 },
    { "name": "Iwai", "url": "https://telegra.ph/file/5d30b46504541fec08640.jpg", "value": 2314 },
    { "name": "Yuika", "url": "https://telegra.ph/file/4843f855285f3a30cd0f2.jpg", "value": 4314 },
    { "name": "Asai", "url": "https://telegra.ph/file/588e256eb42758a996dd3.jpg", "value": 3216 },
    { "name": "Yuina", "url": "https://telegra.ph/file/78b81b597d68c2df2daf6.jpg", "value": 2167 },
    { "name": "Harada", "url": "https://telegra.ph/file/a33b7c862829b656bcf98.jpg", "value": 1654 },
    { "name": "Yuuri", "url": "https://telegra.ph/file/bca88dd8a1e430f1b350d.jpg", "value": 4410 },
    { "name": "Minase", "url": "https://telegra.ph/file/b087dd1fe347b423ac501.jpg", "value": 3541 },
    { "name": "Nakayama", "url": "https://telegra.ph/file/984ebf49f875daf258952.jpg", "value": 1648 },
    { "name": "Suzuka", "url": "https://telegra.ph/file/17fa85c5a3c601c95c206.jpg", "value": 2768 },
    { "name": "Fukazawa", "url": "https://telegra.ph/file/c5d17b38a663c19c965e1.jpg", "value": 4276 },
    { "name": "Minasi", "url": "https://telegra.ph/file/d86b5d6ccb4839023d36d.jpg", "value": 4376 },
    { "name": "Hoe Jisi", "url": "https://telegra.ph/file/ad060fa84db1e1a76d472.jpg", "value": 4610 },
    { "name": "Kori", "url": "https://telegra.ph/file/c5705df93126534505aeb.jpg", "value": 1670 },
    { "name": "Izati", "url": "https://telegra.ph/file/bcd03017245e289e5d59e.jpg", "value": 4327 },
    { "name": "Misato", "url": "https://telegra.ph/file/311dc84d0dbd9820f2035.jpg", "value": 4196 },
    { "name": "Gato Neglo", "url": "https://telegra.ph/file/fba308c0e9b8dc51a3739.jpg", "value": 3848 },
    { "name": "Arine", "url": "https://telegra.ph/file/b6008c30fadbcc37d6521.jpg", "value": 4228 },
    { "name": "Arian", "url": "https://telegra.ph/file/54424e0f22a9dcea0d72a.jpg", "value": 1822 },
    { "name": "Zey Lan", "url": "https://telegra.ph/file/0d5a1c46efecb611c534e.jpg", "value": 3282 },
    { "name": "Jare", "url": "https://telegra.ph/file/36506b2eb09b59e4c1b15.jpg", "value": 2383 },
    { "name": "Estefani", "url": "https://telegra.ph/file/79394b801b83cc42e9416.jpg", "value": 4822 },
    { "name": "Bianca", "url": "https://telegra.ph/file/481d359f3118dd6e189d4.jpg", "value": 2848 },
    { "name": "Valena Torres", "url": "https://telegra.ph/file/b5f2bfbf9f4dbbdc77557.jpg", "value": 3093 },
    { "name": "Hariri", "url": "https://telegra.ph/file/e9d65d947a307758e263e.jpg", "value": 1849 },
    { "name": "Hannabi", "url": "https://telegra.ph/file/828a14dfe135de2b95d1e.jpg", "value": 3729 },
    { "name": "Glod Frinn", "url": "https://telegra.ph/file/014469a6f7a135b1aa3c2.jpg", "value": 4082 },
    { "name": "Iselia Hare", "url": "https://telegra.ph/file/97a9fc1a968c0d4c7de86.jpg", "value": 4090 },
    { "name": "Logi Simi", "url": "https://telegra.ph/file/d6431b06a6472c2c5d659.jpg", "value": 1838 },
    { "name": "Zakura Monetta", "url": "https://telegra.ph/file/92cb2fa8dff489e7cd2d9.jpg", "value": 2744 },
    { "name": "Naiden Su", "url": "https://telegra.ph/file/104798abde16ca5720b53.jpg", "value": 2000 },
    { "name": "Su Momo", "url": "https://telegra.ph/file/946628047fb16d9269e01.jpg", "value": 3999 },
    { "name": "Kadi Sameli", "url": "https://telegra.ph/file/572dc2619eca0d1af25e2.jpg", "value": 837 },
    { "name": "Lidia Mar", "url": "https://telegra.ph/file/26f2fad32740b8bb43a54.jpg", "value": 1939 },
    { "name": "Tomoko Fero", "url": "https://telegra.ph/file/d20ef2440573028908c97.jpg", "value": 4292 },
    { "name": "Haranda Leo", "url": "https://telegra.ph/file/38d94646644cfc2d8333b.jpg", "value": 3664 },
    { "name": "Kitu San", "url": "https://telegra.ph/file/ef2acf1a3557e948f17f0.jpg", "value": 4564 },
    { "name": "Alexa Martín", "url": "https://telegra.ph/file/c63c9808b4fb34baebca2.jpg", "value": 2553 },
    { "name": "Miza", "url": "https://telegra.ph/file/ab28124f80d0461b662c7.jpg", "value": 2244 },
    { "name": "Erza", "url": "https://telegra.ph/file/bd5b338d773ca5b7a50f0.jpg", "value": 1442 },
    { "name": "Ino", "url": "https://telegra.ph/file/459d24f28be3d17bb14bb.jpg", "value": 1004 },
    { "name": "Inno", "url": "https://telegra.ph/file/ad67fcea0c7f67dc4e36b.jpg", "value": 500 },
    { "name": "Orihime", "url": "https://telegra.ph/file/4bd39afaf509712b08fab.jpg", "value": 4653 },
    { "name": "Winry", "url": "https://telegra.ph/file/bd01c6ed6e6ff0f9a4dd6.jpg", "value": 1441 },
    { "name": "Ai Val", "url": "https://telegra.ph/file/e3b855891fd71bf73527e.jpg", "value": 4222 },
    { "name": "Sumirenko", "url": "https://telegra.ph/file/56b804e532f6df98389ab.jpg", "value": 3552 },
    { "name": "Bennko", "url": "https://telegra.ph/file/2cd1fa18dc5f4ebfd1fe1.jpg", "value": 734 },
    { "name": "Verizan", "url": "https://telegra.ph/file/3c0dd4377e16c100959a8.jpg", "value": 3028 },
    { "name": "Anila", "url": "https://telegra.ph/file/bda544ceba1b8cc093511.jpg", "value": 2324 },
    { "name": "Akeno Himejima", "url": "https://telegra.ph/file/422ddc600f4a926263aef.jpg", "value": 3536 },
    { "name": "Akari Akaza", "url": "https://telegra.ph/file/b853af8e4df4344a7c8f0.jpg", "value": 1424 },
    { "name": "Akari Kito", "url": "https://telegra.ph/file/cc8d2931e8c4769664f34.jpg", "value": 1452 },
    { "name": "Mizunashi", "url": "https://telegra.ph/file/f3f72dd31bfa672166a3d.jpg", "value": 3532 },
    { "name": "Saeki", "url": "https://telegra.ph/file/b540e0d23e1c28851588b.jpg", "value": 3424 },
    { "name": "Watanabe", "url": "https://telegra.ph/file/8157701ad60227be430dc.jpg", "value": 4599 },
    { "name": "", "url": "https://telegra.ph/file/10e9136f43d88087f4445.jpg", "value": 2442 },
    { "name": "Akemi Homura", "url": "https://telegra.ph/file/2d01704df0e80ff422b2f.jpg", "value": 1563 },
    { "name": "Ameki Serizawa", "url": "https://telegra.ph/file/248156756a8803466df93.jpg", "value": 3235 },
    { "name": "Aki Adagaki", "url": "https://telegra.ph/file/5e2693ad81dda54f2a678.jpg", "value": 1442 },
    { "name": "Akiha Tohno", "url": "https://telegra.ph/file/485f6b1c0c25f5b75b3be.jpg", "value": 3635 },
    { "name": "Akiko Yosano", "url": "https://telegra.ph/file/32d9b1f1ac7e1ac9859e1.jpg", "value": 2332 },
    { "name": "Aiko Amano", "url": "https://telegra.ph/file/2e20f2a34e10b15b7f4b8.jpg", "value": 4323 },
    { "name": "Aina Sakamaki", "url": "https://telegra.ph/file/b2713fb9296c2c5c1324b.jpg", "value": 2234 },
    { "name": "Ai Ohto", "url": "https://telegra.ph/file/e0377e209f2fc75e2460e.jpg", "value": 3442 },
    { "name": "Shinozaki", "url": "https://telegra.ph/file/ff8934aff4fe6616aba17.jpg", "value": 2244 },
    { "name": "Tenkawa", "url": "https://telegra.ph/file/eb1bdf3e42a445be39bf2.jpg", "value": 1452 },
    { "name": "Kashiwazaki", "url": "https://telegra.ph/file/35a055c9515ac1e650576.jpg", "value": 3542 },
    { "name": "Airi Shiina", "url": "https://telegra.ph/file/754ce1396315fbb405ed2.jpg", "value": 3522 },
    { "name": "Aisaka Taiga", "url": "https://telegra.ph/file/c0444c639f8bf7e29edaa.jpg", "value": 2455 },
    { "name": "Aislinn", "url": "https://telegra.ph/file/89f99562312de45fcfb7d.jpg", "value": 2378 },
    { "name": "Aiz Wallenstein", "url": "https://telegra.ph/file/858daf2c8cf662d0a7b7d.jpg", "value": 1493 },
    { "name": "Alana", "url": "https://telegra.ph/file/7890441706f0a61cde06d.jpg", "value": 2844 },
    { "name": "Alisa", "url": "https://telegra.ph/file/746a02aee3eab86589980.jpg", "value": 1938 },
    { "name": "Alice Cartelet", "url": "https://telegra.ph/file/c720b04ccbe017c9758a1.jpg", "value": 4928 },
    { "name": "Zuberg", "url": "https://telegra.ph/file/acf089dff86155f6f7bef.jpg", "value": 2839 },
    { "name": "Althea", "url": "https://telegra.ph/file/964d383d6d528b77bc3e7.jpg", "value": 3838 },
    { "name": "Alma", "url": "https://telegra.ph/file/62606589358684a0f81a2.jpg", "value": 3773 },
    { "name": "", "url": "https://telegra.ph/file/d32571b72d8264da6b702.jpg", "value": 2949 },
    { "name": "Ami Kawashima", "url": "https://telegra.ph/file/6651dd0fc49bc4244e340.jpg", "value": 1939 },
    { "name": "Amina", "url": "https://telegra.ph/file/ab0fddf690ec6e8f701f4.jpg", "value": 839 },
    { "name": "Hanya", "url": "https://telegra.ph/file/f43af2894c849c46141d8.jpg", "value": 3930 },
    { "name": "Miyamura", "url": "https://telegra.ph/file/e3b19d9a2628e0ae2c564.jpg", "value": 2000 },
    { "name": "Aramaki Shizuka", "url": "https://telegra.ph/file/2f52f1585db9562206033.jpg", "value": 4939 },
    { "name": "Arcueid Brunestud", "url": "https://telegra.ph/file/e8e4eab84c5b6ebd1d1c4.jpg", "value": 5393 },
    { "name": "Asahina Mikuru", "url": "https://telegra.ph/file/6fce764bc641089b977f1.jpg", "value": 1343 },
    { "name": "Asuna Yuuki", "url": "https://telegra.ph/file/4aef3dffdca0052bbf9ff.jpg", "value": 4949 },
    { "name": "Asuka Langley Soryu", "url": "https://telegra.ph/file/43b9afe7e61bdea03208a.jpg", "value": 1939 },
    { "name": "Asura", "url": "https://telegra.ph/file/fcab655fcc521d77919c4.jpg", "value": 3949 },
    { "name": "Ayaka", "url": "https://telegra.ph/file/d654514d38d71fff25324.jpg", "value": 1737 },
    { "name": "Ayano Tateyama", "url": "https://telegra.ph/file/406f3ac65c9edcaa583d1.jpg", "value": 4737 },
    { "name": "Beatrice", "url": "https://telegra.ph/file/284512852066388d04d1d.jpg", "value": 2737 },
    { "name": "Bell Cranel", "url": "https://telegra.ph/file/c23cda52e84822cfdc313.jpg", "value": 2662 },
    { "name": "Bishamon", "url": "https://telegra.ph/file/9be5273b562634de43abe.jpg", "value": 626 },
    { "name": "Blake Belladonna", "url": "https://telegra.ph/file/364c72e563edda8ab5d1d.jpg", "value": 3738 },
    { "name": "Ciel Phantomhive", "url": "https://telegra.ph/file/45614ef17d77712c42692.jpg", "value": 4938 },
    { "name": "Clementine", "url": "https://telegra.ph/file/bb864f9c8d6144adabd3f.jpg", "value": 1928 },
// Agrega más waifus aquí...
]

// Función para obtener una waifu aleatoria
function obtenerWaifuAleatoria() {
const indiceAleatorio = Math.floor(Math.random() * waifus.length)
return waifus[indiceAleatorio]}

// Función para mostrar la waifu obtenida
function mostrarWaifu(waifu) {
await conn.sendFile(m.chat, imga.url, 'thumbnail.jpg', `🚩 *Nombre:*\n◇ ${imga.name}\n\n💸 *Valor:*\n◇ ${imga.value}`, fkontak, null, rcanal)}

// Ejecuta la función para obtener y mostrar una waifu aleatoria
const waifuAleatoria = obtenerWaifuAleatoria();
mostrarWaifu(waifuAleatoria)}

handler.command = ['rw', 'rollwaifu']
handler.help = ['rw']
handler.tags = ['anime']
export default handler