
const scrtiptName = "라스트 쉘터 자동 응답 알림 봇";


function response
(room, msg, sender, isGroupChat, replier, ImageDB, packageName){
   

    const Today = new Date();
    let year = Today.getFullYear(); //년
    let month = Today.getMonth() +1; //월
    let date = Today.getDate(); //일
    let day = Today.getDay(); //요일
    let hours = Today.getHours(); //시
    let minutes = Today.getMinutes(); //분
    let second = Today.getSeconds(); //초

    var week = new Array('일', '월', '화', '수', '목', '금', '토');

// 장난용 대답

if(msg == "/오랑캐"){
    var rand = Math.floor(Math.random()*6);
    switch(rand){
        case 0 : replier.reply("똥멍청이");
        break;
        case 1 : replier.reply("타도햇살파");
        break;
        case 2 : replier.reply("이거 누가 시켜서 한거에요");
        break;
        case 3 : replier.reply("난 잘못없어요 살려주세요 ㅠㅠ");
        break;
        case 4 : replier.reply("강퇴당하면 원망할꺼에요");
        break;
        case 5 : replier.reply("써니 만세");
        break;
        default : replier.reply("장비를 정지합니다. 어 안되자나. 정지가 안돼.")


    }

}

if(msg == "/카베르"){
    var rand = Math.floor(Math.random()*6);
    switch(rand){
        case 0 : replier.reply("내 이름은 카베르! 세젤예죠!");
        break;
        case 1 : replier.reply("내 이름은 카베르! 세젤예죠?");
        break;
        case 2 : replier.reply("내 이름은 카베르! 세젤예일까요?");
        break;
        case 3 : replier.reply("내 이름은 카베르! 세젤예일꺼에요!");
        break;
        case 4 : replier.reply("내 이름은 카베르!");
        break;
        case 5 : replier.reply("내 이름은 카베르! 세젤예였으면해요!");
        break;
        default : replier.reply("노예 4호가 입장하였습니다.")
}
}
if(msg == "/코난"){
    replier.reply("내 이름은 고난. 함정이죠.");
}

if(msg=="/범형"){
    replier.reply("나는 햇살파 행동대장이지롱~~~~~~");
}

if(msg=="/오랑캐"){
    replier.reply("나는 오랑캐만 믿고 따르겠습니다.")
}





//로또번호 추천

if(msg == "/로또"){
    replier.reply("Koreaps는 당첨을 기원합니다. 재미로만 사용해주시고 도배는 자제해 주세요.")
    var lotto1 = new Array ()
    var lotto2 = new Array ()
    var lotto3 = new Array ()
    var lotto4 = new Array ()
    var lotto5 = new Array ()
    var lotto6 = new Array ()
    var lottobonus = new Array ()

    for (let i = 0; i<45; i++){
    lotto1[i]=i+1;
    }
    var num1rand = Math.floor(Math.random()*44);
    var num1 = lotto1[num1rand];
    lotto1[num1rand] = 0;
    let i2 = 0;

    for(let i =0; i<44; i++){
        if(lotto1[i] != 0){
            lotto2[i2] = lotto1[i];
            i2++;
        }
    }
    var num2rand = Math.floor(Math.random()*43);
    var num2 = lotto2[num2rand];
    lotto2[num2rand] = 0;
    let i3 = 0;

    for(let i =0; i<43; i++){
        if(lotto2[i] != 0){
            lotto3[i3] = lotto2[i]; 
            i3++;
        }
    }
    var num3rand = Math.floor(Math.random()*42);
    var num3 = lotto3[num3rand];
    lotto3[num3rand] = 0;
    let i4 = 0;

    for(let i =0; i<42; i++){
        if(lotto3[i] != 0){
            lotto4[i4] = lotto3[i];
            i4++;
        }
    }
    var num4rand = Math.floor(Math.random()*41);
    var num4 = lotto4[num4rand];
    lotto4[num4rand] = 0;
    let i5 = 0;

    for(let i =0; i<41; i++){
        if(lotto4[i] != 0){
            lotto5[i5] = lotto4[i]; 
            i5++;
        }
    }
    var num5rand = Math.floor(Math.random()*40);
    var num5 = lotto5[num5rand];
    lotto5[num5rand] = 0;
    let i6 = 0;
    
    for(let i =0; i<40; i++){
        if(lotto5[i] != 0){
            lotto6[i6] = lotto5[i]; 
            i6++;
        }
    }
    var num6rand = Math.floor(Math.random()*39);
    var num6 = lotto6[num6rand];
    lotto6[num6rand] = 0;
    let i7 = 0;

    for(let i =0; i<39; i++){
        if(lotto6[i] != 0){
            lottobonus[i7] = lotto6[i]; 
            i7++;
        }
    }
    var numbonusrand = Math.floor(Math.random()*38);
    var numbonus = lottobonus[numbonusrand];
    
    const LOTTO = [num1, num2, num3, num4, num5, num6]
    LOTTO.sort(function(a, b) {
        if(a>b) return 1;
        if(a===b) return 0;
        if(a<b) return -1;
    });

    replier.reply(LOTTO+" 보너스번호 "+numbonus )
    
}





    if(msg == "/테스트"){
        replier.reply("살아있습니다!");
    }

    if(msg == "/명령어"){
        replier.reply("/다음 입력하는 말에 따라 결과가 나옴니다.\n/오늘군비 /지금군비 /1분가속 /무료뽑기\n일요일 선택별 군비\n/채집 /건설\n/연구 /영웅\n/훈련 /전투");
    }



    if(msg== "/오늘군비"){
    switch (day) {
            case 1: replier.reply("월요일 : 채집군비 \n00 ~ 11 : 일요일 훈련 선택에 따라 다릅니다. \n11 : 건물 건물가속 \n12 : 건물 VIP \n13 : 병사가속 \n14 : 건물 병사훈련 \n 15 : 3종가속 \n16 : 건물 연구 병사가속 \n17 : 건물 연구 병사훈련 VIP \n18 : 건물 VIP \n19 : 건물 건물가속 \n20 : 건물 VIP \n21 : 변사가속 \n22 : 건물 병사훈련 \n23 : 3종가속");
                break;
            case 2: replier.reply("화요일 : 건설군비 \n00 : 건설 연구 병사가속 \n01 : 건물 연구 병사훈련 VIP \n02 : 건물 VIP \n03 : 건물 건물가속 \n04 : 건물 VIP \n05 : 병사가속 \n06 : 건물 병사훈련 \n07 : 3종가속 \n08 : 건물 연구 병사가속 \n09 : 건물 연구 병사훈련 VIP \n10 : 건물 VIP \n11 : 건물 액세서리 \n12 : 건물 연구 병사가속 \n13 : 건물 액세서리 \n14 : 1분가속 \n15 : 건물 연구 \n16 : 건물 건물가속 \n17 : 건물 연구 \n18 : 건물 연구 병사훈련 \n19 : 건물 액세서리 \n20 : 건물 연구 병사가속 \n21 : 건물 액세서리 \n22 : 1분가속 \n23 : 건물 연구");
                break;
            case 3: replier.reply("수요일 : 연구군비 \n00 : 건물 건물가속 \n01 : 건물 연구 \n02 : 건물 연구 병사훈련 \n03 : 건물 액세서리 \n04 : 건물 연구 병사가속 \n05 : 건물 액세서리 \n06 : 1분가속 \n07 : 건물 연구 \n08 : 건물 건물가속 \n09 : 건물 연구 \n10 : 건물 연구 병사훈련 \n11 : 1분가속 \n12 : 연구 연구가속 \n13 : 3종가속 \n14 : 건물 연구 \n15 : 건물 연구 \n16 : 3종가속 \n17 : 건물 연구 병사가속 \n18 : 건물 연구 \n19 : 1분가속 \n20 : 연구 연구가속 \n21 : 3종가속 \n22 : 건물 연구 \n23 : 건물 연구");
                break;          
            case 4: replier.reply("목요일 : 영웅군비  \n00 : 3종가속 \n01 : 건물 연구 병사가속 \n02 : 건무 연구 \n03 : 1분가속 \n04 : 연구 연구가속 \n05 : 3종가속 \n06 : 건물 연구 \n07 : 건물 연구 \n08 : 3종 가속 \n09 : 건물 연구 병사가속 \n10 : 건물 연구 \n11 : 뽑기 스킬오픈 좀비 \n12 : 풀세트 \n13 : 지훈교환 소모 스킬오픈 좀비 \n14 : 풀세트 \n15 : 뽑기 지훈소모 \n16 : 풀세트 \n17 : 지훈교환 소모 스킬오픈 좀비 \n18 : 풀세트 \n19 : 영웅 스킬오픈 좀비 \n20 : 풀세트 \n21 : 지훈교환 소모 스킬오픈 좀비 \n22 : 풀세트 \n23 : 뽑기 지훈소모");
                break;
            case 5: replier.reply("금요일 : 훈련군비 \n00 : 풀세트 \n01 : 지훈교환 소모 스킬오픈 좀비 \n02 : 풀세트 \n03 : 뽑기 스킬오픈 좀비 \n04 : 풀세트 \n05 : 지훈교환 소모 스킬오픈 좀비 \n06 : 풀세트 \n07 : 뽑기 지훈소모 \n08 : 풀세트 \n09 : 지훈교환 소모 스킬오픈 좀비 \n10 : 풀세트 \n11 : 1분가속 \n12 : 3종가속 \n13 : 건물 연구 병사가속 \n14 : 병사가속 \n15 : 건물 연구 병사가속 \n16 : 건물 병사훈련 \n17 : 연구 병사훈련 \n18 : 1분가속 \n19 : 1분가속 \n20 : 3종가속 \n21 : 건물 연구 병사가속 \n22 : 병사가속 \n23 : 건물 연구 병사가속");
                break;
            case 6: replier.reply("토요일 : 전쟁군비 (킬전) \n00 : 건물 병사훈련 \n01 : 연구 병사훈련 \n02 : 1분가속 \n03 : 1분가속 \n04 : 3종가속 \n05 : 건물 연구 병사가속 \n06 : 병사가속 \n07 : 건물 연구 병사가속 \n08 : 건물 병사가속 \n09 : 연구 병사가속 \n10 : 1분가속 \n11 : 1분가속 \n12 : 연구 연구가속 \n13 : 건물 건물가속 \n14 : 병사가속 \n15 : 건물 연구 병사가속 \n16 : 건무 연구 병사가속 \n17 : 건물 병사훈련 \n18 : 연구 병사훈련 \n19 : 1분가속 \n20 : 연구 연구가속 \n21 : 건물 건물가속 \n22 : 병사가속 \n23 : 건물 연구 병사가속");
                break;
            case 0: replier.reply("일요일 : 군비 선택에 따라 다릅니다. \n00 : 건물 연구 병사가속 \n01 : 건물 병사훈련 \n02 : 연구 병사훈련 \n03 : 1분가속 \n04 : 연구 연구가속 \n05 : 건물 건물가속 \n06 : 병사가속 \n07 : 건물 연구 병사가속 \n08 : 건물 연구 병사가속 \n09 : 건물 병사훈련 \n10 : 연구 병사훈련 \n11~00 : 일요일 훈련 선택에 따라 다릅니다.");
                break;
            default: replier.reply("요일을 불러오지 못하였습니다.");                    
            }
    }

    if(msg == "/지금군비"){
        replier.reply("오늘은 "+week[day]+"요일 입니다.\n현재시간은"+hours+"시 "+ minutes +"분 "+ second + "초 입니다.");
        switch (day){
        case 1 : {replier.reply("월요일 군비는 채집입니다.");
            switch(hours){
                case 00 : replier.reply("일요일 군비 선택에 따라 다름니다. /선택한군비명 을 입력해서 검색해주세요.");
                break;
                case 01 : replier.reply("일요일 군비 선택에 따라 다름니다. /선택한군비명 을 입력해서 검색해주세요.");
                break;
                case 02 : replier.reply("일요일 군비 선택에 따라 다름니다. /선택한군비명 을 입력해서 검색해주세요.");
                break;
                case 03 : replier.reply("일요일 군비 선택에 따라 다름니다. /선택한군비명 을 입력해서 검색해주세요.");
                break;
                case 04 : replier.reply("일요일 군비 선택에 따라 다름니다. /선택한군비명 을 입력해서 검색해주세요.");
                break;
                case 05 : replier.reply("일요일 군비 선택에 따라 다름니다. /선택한군비명 을 입력해서 검색해주세요.");
                break;
                case 06 : replier.reply("일요일 군비 선택에 따라 다름니다. /선택한군비명 을 입력해서 검색해주세요.");
                break;
                case 07 : replier.reply("일요일 군비 선택에 따라 다름니다. /선택한군비명 을 입력해서 검색해주세요.");
                break;
                case 08 : replier.reply("일요일 군비 선택에 따라 다름니다. /선택한군비명 을 입력해서 검색해주세요.");
                break;
                case 09 : replier.reply("일요일 군비 선택에 따라 다름니다. /선택한군비명 을 입력해서 검색해주세요.");
                break;
                case 10 : replier.reply("일요일 군비 선택에 따라 다름니다. /선택한군비명 을 입력해서 검색해주세요.");
                break;
                case 11 : replier.reply("(4K 건설) 건설 건설가속");
                break;
                case 12 : replier.reply("(3K 건설) 건설");
                break;
                case 13 : replier.reply("(4K 훈련) 훈련가속");
                break;
                case 14 : replier.reply("(3K 훈련) 건설 훈련");
                break;
                case 15 : replier.reply("(4K 건설) 3종가속");
                break;
                case 16 : replier.reply("(4K 훈련) 건설 연구 훈련가속");
                break;
                case 17 : replier.reply("(3K 연구) 건설 연구 훈련");
                break;
                case 18 : replier.reply("(3K 건설) 건설");
                break;
                case 19 : replier.reply("(4K 건설) 건설 건설가속");
                break;
                case 20 : replier.reply("(3K 건설) 건설");
                break;
                case 21 : replier.reply("(4K 훈련) 훈련가속");
                break;
                case 22 : replier.reply("(3K 훈련) 건설 훈련");
                break;
                case 23 : replier.reply("(4K 건설) 3종가속");
                break;
                default : replier.reply("시간을 불러오지 못했습니다.");
            }
            break;
        }

        case 2 : {replier.reply("화요일 군비는 건설입니다.");
            switch(hours){
                case 00 : replier.reply("(4K 훈련) 건설 연구 훈련가속");
                break;
                case 01 : replier.reply("(3K 연구) 건설 연구 훈련");
                break;
                case 02 : replier.reply("(3K 건설) 건설");
                break;
                case 03 : replier.reply("(4K 건설) 건설 건설가속");
                break;
                case 04 : replier.reply("(3K 건설) 건설");
                break;
                case 05 : replier.reply("(4K 훈련) 훈련가속");
                break;
                case 06 : replier.reply("(3K 훈련) 건설 훈련");
                break;
                case 07 : replier.reply("(4K 건설) 3종가속");
                break;
                case 08 : replier.reply("(4K 훈련) 건설 연구 훈련가속");
                break;
                case 09 : replier.reply("(3K 연구) 건설 연구 훈련");
                break;
                case 10 : replier.reply("(3K 건설) 건설");
                break;
                case 11 : replier.reply("(3K 연구) 건설 악세");
                break;
                case 12 : replier.reply("(4K 훈련) 건설 연구 훈련가속");
                break;
                case 13 : replier.reply("(3K 건설) 건설 악세");
                break;
                case 14 : replier.reply("(4K 훈련) 1분가속");
                break;
                case 15 : replier.reply("(3K 연구) 건설 연구");
                break;
                case 16 : replier.reply("(4K 건설) 건설 건설가속");
                break;
                case 17 : replier.reply("(4K 건설) 건설 연구");
                break;
                case 18 : replier.reply("(3K 연구) 건설 연구 훈련");
                break;
                case 19 : replier.reply("(3K 연구) 건설 악세");
                break;
                case 20 : replier.reply("(4K 훈련) 건설 연구 훈련가속");
                break;
                case 21 : replier.reply("(3K 건설) 건설 악세");
                break;
                case 22 : replier.reply("(4K 훈련) 1분가속");
                break;
                case 23 : replier.reply("(3K 연구) 건설 연구");
                break;
                default : replier.reply("시간을 불러오지 못했습니다.");
            }
            break;
        }
        
        case 3 : {replier.reply("수요일 군비는 연구입니다.");
            switch(hours){
                case 00 : replier.reply("(4K 건설) 건설 건설가속");
                break;
                case 01 : replier.reply("(4K 건설) 건설 연구");
                break;
                case 02 : replier.reply("(3K 연구) 건설 연구 훈련");
                break;
                case 03 : replier.reply("(3K 연구) 건설 악세");
                break;
                case 04 : replier.reply("(4K 훈련) 건설 연구 훈련가속");
                break;
                case 05 : replier.reply("(3K 건설) 건설 악세");
                break;
                case 06 : replier.reply("(4K 훈련) 1분가속");
                break;
                case 07 : replier.reply("(3K 연구) 건설 연구");
                break;
                case 08 : replier.reply("(4K 건설) 건설 건설가속");
                break;
                case 09 : replier.reply("(4K 건설) 건설 연구");
                break;
                case 10 : replier.reply("(3K 연구) 건설 연구 훈련");
                break;
                case 11 : replier.reply("(4K 훈련) 1분가속");
                break;
                case 12 : replier.reply("(4K 연구) 연구 연구가속");
                break;
                case 13 : replier.reply("(4K 건설) 3종가속");
                break;
                case 14 : replier.reply("(3K 연구) 건설 연구");
                break;
                case 15 : replier.reply("(3K 건설) 건설 연구");
                break;
                case 16 : replier.reply("(4K 훈련) 3종가속");
                break;
                case 17 : replier.reply("(4K 훈련) 건설 연구 훈련가속");
                break;
                case 18 : replier.reply("(4K 연구) 건설 연구");
                break;
                case 19 : replier.reply("(4K 훈련) 1분가속");
                break;
                case 20 : replier.reply("(4K 연구) 연구 연구가속");
                break;
                case 21 : replier.reply("(4K 건설) 3종가속");
                break;
                case 22 : replier.reply("(3K 연구) 건설 연구");
                break;
                case 23 : replier.reply("(3K 건설) 건설 연구");
                break;
                default : replier.reply("시간을 불러오지 못했습니다.");
            }
            break;
        }

        case 4 : {replier.reply("목요일 군비는 영웅입니다.");
            switch(hours){
                case 00 : replier.reply("(4K 훈련) 3종가속");
                break;
                case 01 : replier.reply("(4K 훈련) 건설 연구 훈련가속");
                break;
                case 02 : replier.reply("(4K 연구) 건물 연구");
                break;
                case 03 : replier.reply("(4K 훈련) 1분가속");
                break;
                case 04 : replier.reply("(4K 연구) 연구 연구가속");
                break;
                case 05 : replier.reply("(4K 건설) 3종가속");
                break;
                case 06 : replier.reply("(3K 연구) 건설 연구");
                break;
                case 07 : replier.reply("(3K 건설) 건설 연구");
                break;
                case 08 : replier.reply("(4K 훈련) 3종가속");
                break;
                case 09 : replier.reply("(4K 훈련) 건설 연구 훈련가속");
                break;
                case 10 : replier.reply("(4K 연구) 건설 연구");
                break;
                case 11 : replier.reply("(4K 건설) 뽑기 스킬오픈 좀비");
                break;
                case 12 : replier.reply("(3K 훈련) 뽑기 훈장획득,소모 레벨업 스킬오픈");
                break;
                case 13 : replier.reply("(4K 연구) 훈장획득,소모 스킬오픈 좀비");
                break;
                case 14 : replier.reply("(3K 훈련) 뽑기 훈장획득,소모 레벨업 스킬오픈");
                break;
                case 15 : replier.reply("(3K 훈련) 뽑기 훈장소모");
                break;
                case 16 : replier.reply("(3K 훈련) 뽑기 훈장획득,소모 레벨업 스킬오픈");
                break;
                case 17 : replier.reply("(4K 연구) 훈장획득,소모 스킬오픈 좀비");
                break;
                case 18 : replier.reply("(3k 훈련) 뽑기 훈장획득,소모 레벨업 스킬오픈");
                break;
                case 19 : replier.reply("(4K 건설) 뽑기 스킬오픈 좀비");
                break;
                case 20 : replier.reply("(3k 훈련) 뽑기 훈장획득,소모 레벨업 스킬오픈");
                break;
                case 21 : replier.reply("(4K 연구) 훈장획득,소모 스킬오픈 좀비킬");
                break;
                case 22 : replier.reply("(3k 훈련) 뽑기 훈장획득,소모 레벨업 스킬오픈");
                break;
                case 23 : replier.reply("(3K 훈련) 뽑기 훈장소모");
                break;
                default : replier.reply("시간을 불러오지 못했습니다.");
            }
            break;
        }

        case 5 : {replier.reply("금요일 군비는 훈련입니다.");
            switch(hours){
                case 00 : replier.reply("(3K 훈련) 뽑기 훈장획득,소모 레벨업 스킬오픈");
                break;
                case 01 : replier.reply("(4K 연구) 훈장획득,소모 스킬오픈 좀비");
                break;
                case 02 : replier.reply("(3K 훈련) 뽑기 훈장획득,소모 레벨업 스킬오픈");
                break;
                case 03 : replier.reply("(4K 건설) 뽑기 스킬오픈 좀비");
                break;
                case 04 : replier.reply("(3K 훈련) 뽑기 훈장획득,소모 레벨업 스킬오픈");
                break;
                case 05 : replier.reply("(4K 연구) 훈장획득,소모 스킬오픈 좀비");
                break;
                case 06 : replier.reply("(3K 훈련) 뽑기 훈장획득,소모 레벨업 스킬오픈");
                break;
                case 07 : replier.reply("(3k 훈련) 뽑기 훈장소모");
                break;
                case 08 : replier.reply("(3K 훈련) 뽑기 훈장획득,소모 레벨업 스킬오픈");
                break;
                case 09 : replier.reply("(4K 연구) 훈장획득,소모 스킬오픈 좀비");
                break;
                case 10 : replier.reply("(3K 훈련) 뽑기 훈장획득,소모 레벨업 스킬오픈");
                break;
                case 11 : replier.reply("(4K 훈련) 1분가속");
                break;
                case 12 : replier.reply("(4K 건설) 3종가속");
                break;
                case 13 : replier.reply("(4K 훈련) 건설 연구 훈련가속");
                break;
                case 14 : replier.reply("(4K 훈련) 훈련가속");
                break;
                case 15 : replier.reply("(4K 연구) 건설 연구 훈련가속");
                break;
                case 16 : replier.reply("(3K 훈련) 건설 훈련");
                break;
                case 17 : replier.reply("(3K 연구) 연구 훈련");
                break;
                case 18 : replier.reply("(4K 훈련) 1분가속");
                break;
                case 19 : replier.reply("(4K 훈련) 1분가속");
                break;
                case 20 : replier.reply("(4K 건설) 3종가속");
                break;
                case 21 : replier.reply("(4K 훈련) 건설 연구 훈련가속");
                break;
                case 22 : replier.reply("(4K 훈련) 훈련가속");
                break;
                case 23 : replier.reply("(4K 연구) 건설 연구 훈련가속");
                break;
                default : replier.reply("시간을 불러오지 못했습니다.");
            }
            break
        }

        case 6 : {replier.reply("토요일 군비는 전투(킬)입니다.");
            switch(hours){
                case 00 : replier.reply("(3K 훈련) 건설 훈련");
                break;
                case 01 : replier.reply("(3K 연구) 연구 훈련 ");
                break;
                case 02 : replier.reply("(4K 훈련) 1분가속");
                break;
                case 03 : replier.reply("(4K 훈련) 1분가속");
                break;
                case 04 : replier.reply("(4K 건설) 3종가속");
                break;
                case 05 : replier.reply("(4K 훈련) 건설 연구 훈련가속");
                break;
                case 06 : replier.reply("(4K 훈련) 훈련가속");
                break;
                case 07 : replier.reply("(4K 연구) 건설 연구 훈련가속");
                break;
                case 08 : replier.reply("(3K 훈련) 건설 훈련");
                break;
                case 09 : replier.reply("(3K 연구) 연구 훈련");
                break;
                case 10 : replier.reply("(4K 훈련) 1분가속");
                break;
                case 11 : replier.reply("(4K 훈련) 1분 가속");
                break;
                case 12 : replier.reply("(4K 연구) 연구 연구가속");
                break;
                case 13 : replier.reply("(4K 건설) 건설 건설가속");
                break;
                case 14 : replier.reply("(4K 훈련) 훈련가속");
                break;
                case 15 : replier.reply("(4K 훈련) 건설 연구 훈련가속");
                break;
                case 16 : replier.reply("(4K 건설) 건설 연구 훈련가속");
                break;
                case 17 : replier.reply("(3K 건설) 건설 훈련");
                break;
                case 18 : replier.reply("(3K 연구) 연구 훈련");
                break;
                case 19 : replier.reply("(4K 훈련) 1분가속");
                break;
                case 20 : replier.reply("(4K 연구) 연구 연구가속");
                break;
                case 21 : replier.reply("(4K 건설) 건설 건설가속");
                break;
                case 22 : replier.reply("(4K 훈련) 훈련가속");
                break;
                case 23 : replier.reply("(4K 훈련) 건설 연구 훈련가속");
                break;
                default : replier.reply("시간을 불러오지 못했습니다.");
            }
            break;
        }

        case 0 : {replier.reply("일요일 군비는 선택입니다.");
            switch(hours){
                case 00 : replier.reply("(4K 건설) 건설 연구 훈련가속");
                break;
                case 01 : replier.reply("(3K 건설) 건설 훈련");
                break;
                case 02 : replier.reply("(3K 연구) 연구 훈련");
                break;
                case 03 : replier.reply("(4K 훈련) 1분가속");
                break;
                case 04 : replier.reply("(4K 연구) 연구 연구가속");
                break;
                case 05 : replier.reply("(4K 건설) 건설 건설가속");
                break;
                case 06 : replier.reply("(4K 훈련) 훈련가속");
                break;
                case 07 : replier.reply("(4K 훈련) 건설 연구 훈련가속");
                break;
                case 08 : replier.reply("(4K 건설) 건설 연구 훈련가속");
                break;
                case 09 : replier.reply("(3K 건설) 건설 훈련");
                break;
                case 10 : replier.reply("(3K 연구) 연구 훈련");
                break;
                case 11 : replier.reply("일요일 군비 선택에 따라 다름니다. /선택한군비명 을 입력해서 검색해주세요.");
                break;
                case 12 : replier.reply("일요일 군비 선택에 따라 다름니다. /선택한군비명 을 입력해서 검색해주세요.");
                break;
                case 13 : replier.reply("일요일 군비 선택에 따라 다름니다. /선택한군비명 을 입력해서 검색해주세요.");
                break;
                case 14 : replier.reply("일요일 군비 선택에 따라 다름니다. /선택한군비명 을 입력해서 검색해주세요.");
                break;
                case 15 : replier.reply("일요일 군비 선택에 따라 다름니다. /선택한군비명 을 입력해서 검색해주세요.");
                break;
                case 16 : replier.reply("일요일 군비 선택에 따라 다름니다. /선택한군비명 을 입력해서 검색해주세요.");
                break;
                case 17 : replier.reply("일요일 군비 선택에 따라 다름니다. /선택한군비명 을 입력해서 검색해주세요.");
                break;
                case 18 : replier.reply("일요일 군비 선택에 따라 다름니다. /선택한군비명 을 입력해서 검색해주세요.");
                break;
                case 19 : replier.reply("일요일 군비 선택에 따라 다름니다. /선택한군비명 을 입력해서 검색해주세요.");
                break;
                case 20 : replier.reply("일요일 군비 선택에 따라 다름니다. /선택한군비명 을 입력해서 검색해주세요.");
                break;
                case 21 : replier.reply("일요일 군비 선택에 따라 다름니다. /선택한군비명 을 입력해서 검색해주세요.");
                break;
                case 22 : replier.reply("일요일 군비 선택에 따라 다름니다. /선택한군비명 을 입력해서 검색해주세요.");
                break;
                case 23 : replier.reply("일요일 군비 선택에 따라 다름니다. /선택한군비명 을 입력해서 검색해주세요.");
                break;
                default : replier.reply("시간을 불러오지 못했습니다.");
            }
            break;
        }

            default : replier.reply("요일을 불러오지 못했습니다.");
     }
    }
                
            
    if(msg=="/1분가속"){
        replier.reply("화요일 14시 22시 06시\n수요일 11시 19시 03시\n금요일 11시 18시 19시 02시 03시 10시\n토요일 11시 19시 03시")
    } 
    
    if(msg=="/병사훈련"){
        replier.reply("월요일 : 14시 17시 22시\n화요일 : 01시 06시 09시 18시\n수요일 : 02시 10시\n금요일 : 16시 17시\n토요일 : 00시 01시 08시 09시 17시 18시\n일요일 : 01시 02시 09시 10시");
    }




    if(msg=="/채집"){
        replier.reply("아직 정리하지 못했습니다 ㅠㅠ 조금만 기다려 주세요.");
    }
    
    if(msg== "/건설"){
        replier.reply("일요일 (화)건설군비 \n11 : 건물 액세서리 \n12 : 건물 연구 병사가속 \n13 : 건물 액세서리 \n14 : 1분가속 \n15 : 건물 연구 \n16 : 건물 건물가속 \n17 : 건물 연구 \n18 : 건물 연구 병사훈련 \n19 : 건물 액세서리 \n20 : 건물 연구 병사가속 \n21 : 건물 액세서리 \n22 : 1분가속 \n23 : 건물 연구  \n00 : 건물 건물가속 \n01 : 건물 연구 \n02 : 건물 연구 병사훈련 \n03 : 건물 액세서리 \n04 : 건물 연구 병사가속 \n05 : 건물 액세서리 \n06 : 1분가속 \n07 : 건물 연구 \n08 : 건물 건물가속 \n09 : 건물 연구 \n10 : 건물 연구 병사훈련");
    }

    if(msg== "/연구"){
        replier.reply("일요일 (수)연구군비 \n11 : 1분가속 \n12 : 연구 연구가속 \n13 : 3종가속 \n14 : 건물 연구 \n15 : 건물 연구 \n16 : 3종가속 \n17 : 건물 연구 병사가속 \n18 : 건물 연구 \n19 : 1분가속 \n20 : 연구 연구가속 \n21 : 3종가속 \n22 : 건물 연구 \n23 : 건물 연구 \n00 : 3종가속 \n01 : 건물 연구 병사가속 \n02 : 건무 연구 \n03 : 1분가속 \n04 : 연구 연구가속 \n05 : 3종가속 \n06 : 건물 연구 \n07 : 건물 연구 \n08 : 3종 가속 \n09 : 건물 연구 병사가속 \n10 : 건물 연구");
    }

    if(msg== "/영웅"){
        replier.reply("일요일 (목)영웅군비 \n11 : 뽑기 스킬오픈 좀비 \n12 : 풀세트 \n13 : 지훈교환 소모 스킬오픈 좀비 \n14 : 풀세트 \n15 : 뽑기 지훈소모 \n16 : 풀세트 \n17 : 지훈교환 소모 스킬오픈 좀비 \n18 : 풀세트 \n19 : 영웅 스킬오픈 좀비 \n20 : 풀세트 \n21 : 지훈교환 소모 스킬오픈 좀비 \n22 : 풀세트 \n23 : 뽑기 지훈소모 \n00 : 풀세트 \n01 : 지훈교환 소모 스킬오픈 좀비 \n02 : 풀세트 \n03 : 뽑기 스킬오픈 좀비 \n04 : 풀세트 \n05 : 지훈교환 소모 스킬오픈 좀비 \n06 : 풀세트 \n07 : 뽑기 지훈소모 \n08 : 풀세트 \n09 : 지훈교환 소모 스킬오픈 좀비 \n10 : 풀세트");
    }

    if(msg== "/훈련"){
        replier.reply("일요일 (금)훈련군비 \n11 : 1분가속 \n12 : 3종가속 \n13 : 건물 연구 병사가속 \n14 : 병사가속 \n15 : 건물 연구 병사가속 \n16 : 건물 병사훈련 \n17 : 연구 병사훈련 \n18 : 1분가속 \n19 : 1분가속 \n20 : 3종가속 \n21 : 건물 연구 병사가속 \n22 : 병사가속 \n23 : 건물 연구 병사가속 \n00 : 건물 병사훈련 \n01 : 연구 병사훈련 \n02 : 1분가속 \n03 : 1분가속 \n04 : 3종가속 \n05 : 건물 연구 병사가속 \n06 : 병사가속 \n07 : 건물 연구 병사가속 \n08 : 건물 병사가속 \n09 : 연구 병사가속 \n10 : 1분가속");
    }

    if(msg== "/전투"){
        replier.reply("일요일 (토)전투군비 \n11 : 건물 건물가속 \n12 : 건물 액세서리 \n13 : 병사가속 \n14 : 건물 병사훈련 \n15 : 3종가속 \n16 : 건물 연구 병사가속 \n17 : 건물 연구 병사훈련 \n18 : 건물 액세서리 \n19 : 건물 건물가속 \n20 : 건물 액세서리 \n21 : 병사가속 \n22 : 건물 병사훈련 \n23 : 3종가속 \n00 : 건물 연구 병사가속 \n01 : 건물 연구 병사훈련 \n02 : 건물 액세서리 \n03 : 건물 건물가속 \n04 : 건물 액세서리 \n05 : 병사가속 \n06 : 건물 병사훈련 \n07 : 3종가속 \n08 : 건물 연구 병사가속 \n09 : 건물 연구 병사훈련 \n10 : 건물 액세서리");
    }

//랜덤 뽑기

    if(msg == "/무료뽑기"){
        replier.reply("모든 확률은 게임사에서 고지한 확률에 없는 확률은 사견을 담아 장난스럽게 도출하였습니다.");
        var rand = Math.floor(Math.random()*100100)
        if(rand < 100){           
            var S4 = new Array('정치위원','천계용사','벌새','카이사르','주재자','포이즈너');
            var S4rand = Math.floor(Math.random()*6);
            replier.reply("축하드립니다. 시즌 4 영웅이 소환되었습니다.\n" + S4[S4rand]);            
        }
        if(rand >=100 && rand<200){            
            var S3 = new Array('국음의곤봉','천리안','선도자','자유의날개','나스티아소령','대기술자');
            var S3rand = Math.floor(Math.random()*6);
            replier.reply("축하드립니다. 시즌 3 영웅이 소환되었습니다.\n" + S3[S3rand]);
        }
        if(rand>=200 && rand <360){
            var S2 = new Array('팬서','판사','자작','캡틴이바노프','집형관','기사');
            var S2rand = Math.floor(Math.random()*6);
            replier.reply("축하드립니다. 시즌 2 영웅이 소환되었습니다.\n" + S2[S2rand]);
        }
        if(rand >= 360 && rand < 550){
            replier.reply("축하드립니다. 시즌 1 영웅이 소환되었습니다.");
            var S1 = new Array('성군','독수리의눈','친위대','플래시','질주드라이버','사냥매','과거의빛','용의분노','용자');
            var S1rand = Math.floor(Math.random()*9);
            replier.reply("축하드립니다. 시즌 1 영웅이 소환되었습니다.\n" + S1[S1rand]);
        }
        if(rand >=550 && rand <2050){
            var Neworange = new Array('언더테이커','면도날','전투사','아이언가드');
            var Neworangerand = Math.floor(Math.random()*4);
            replier.reply("신기한 금색 영웅을 뽑으셨습니다.\n" + Neworange[Neworangerand]);
        }
        if(rand >= 2050 && rand < 3950){
            var Orange = new Array('사신','조련사','여명수위','수기자','대포관인','훼멸자','무기상인');
            var Orangerand = Math.floor(Math.random()*7);
            replier.reply("금색 일반 영웅을 뽑으셨습니다.\n" + Orange[Orangerand]);
        }
        if(rand >= 3950 && rand < 14480){
            var Violet = new Array('폭도','현상금헌터','철의여인','노장','드라이버','전차마스터','귀화','망령로만자','사교계의여왕','특수부대원','폭파광인','대령','감시자','비밀수호자'); 
            var Violetrand = Math.floor(Math.random()*14);
            replier.reply("보라색 영웅을 뽑으셨습니다.\n" + Violet[Violetrand]);
        }
        if(rand >= 14480 && rand < 23780){
            replier.reply("파란 영웅 중 혼자서 확률이 9프로대인\n좀비킬러");
        }
        if(rand >= 23780 && rand < 33080){
            var Smallblue = new Array('공업저문가','어벤져','반란군수장','경관','중위');
            var Smbrand = Math.floor(Math.random()*5);
            replier.reply("조금 확률이 낮은 파란 영웅을 뽑으셨습니다.\n" + Smallblue[Smbrand]);
        }           
        if(rand >= 33080 && rand < 100040){
            var Blue = new Array('추격수','중사','구원자','청소부','신사','문지기','뚱땡이','사기꾼','전쟁의리더');
            var Bluerand = Math.floor(Math.random()*9);
            replier.reply("파란 영웅을 뽑으셨습니다.\n" + Blue[Bluerand]);
        }
        if(rand >= 100040 && rand < 100100){
            var Unique = new Array('석유부자','상업회장','연금술사','벌목마스터','선봉관','건설반장','전방의무병','용사교관','사수교관','개조차교관');
            var Uniquerand = Math.floor(Math.random()*10);
            replier.reply("유니크한 영웅을 뽑으셨습니다. 시즌영웅보다 확률이 낮아요.\n" + Unique[Uniquerand]);
        }
        if(rand < 0 || rand >= 100100){
            replier.reply("극악의 확률을 뚫으셨습니다.\n하지만 꽝이네요.");
        }        
        
} 

//로또 한장
if(msg == "/로또한장"){
    
    var lotto1 = []
    var lotto2 = []
    var lotto3 = []
    var lotto4 = []
    var lotto5 = []
    var lotto6 = []
    var lottobonus = []
    var LOTTOSET = []
    var LOTTOSETBONUS = []
    var lsb = 0;
    
    for(let sc = 0; sc<5; sc++){
    
        for (let i = 0; i<45; i++){
            lotto1[i]=i+1;
        }
        var num1rand = Math.floor(Math.random()*44);
        var num1 = lotto1[num1rand];
        lotto1[num1rand] = 0;
        let i2 = 0;

        for(let i =0; i<44; i++){
            if(lotto1[i] != 0){
                lotto2[i2] = lotto1[i];
                i2++;
            }
        }
        var num2rand = Math.floor(Math.random()*43);
        var num2 = lotto2[num2rand];
        lotto2[num2rand] = 0;
        let i3 = 0;

        for(let i =0; i<43; i++){
            if(lotto2[i] != 0){
                lotto3[i3] = lotto2[i]; 
                i3++;
            }
        }
        var num3rand = Math.floor(Math.random()*42);
        var num3 = lotto3[num3rand];
        lotto3[num3rand] = 0;
        let i4 = 0;

        for(let i =0; i<42; i++){
            if(lotto3[i] != 0){
                lotto4[i4] = lotto3[i];
                i4++;
            }
        }
        var num4rand = Math.floor(Math.random()*41);
        var num4 = lotto4[num4rand];
        lotto4[num4rand] = 0;
        let i5 = 0;

        for(let i =0; i<41; i++){
            if(lotto4[i] != 0){
                lotto5[i5] = lotto4[i]; 
                i5++;
            }
        }
        var num5rand = Math.floor(Math.random()*40);
        var num5 = lotto5[num5rand];
        lotto5[num5rand] = 0;
        let i6 = 0;
    
        for(let i =0; i<40; i++){
            if(lotto5[i] != 0){
                lotto6[i6] = lotto5[i]; 
                i6++;
            }
        }
        var num6rand = Math.floor(Math.random()*39);
        var num6 = lotto6[num6rand];
        lotto6[num6rand] = 0;
        let i7 = 0;

        for(let i =0; i<39; i++){
            if(lotto6[i] != 0){
                lottobonus[i7] = lotto6[i]; 
                i7++;
            }
        }
        var numbonusrand = Math.floor(Math.random()*38);
        var numbonus = lottobonus[numbonusrand];
    
        var LOTTO = [num1, num2, num3, num4, num5, num6]
        LOTTO.sort(function(a, b) {
            if(a>b) return 1;
            if(a===b) return 0;
            if(a<b) return -1;
        });

        var LOTTOSET = LOTTOSET.concat(LOTTO);
        LOTTOSETBONUS[lsb] = numbonus;
        lsb++;
    }



    replier.reply(LOTTOSET[0]+ " " + LOTTOSET[1]+ " " + LOTTOSET[2]+ " " + LOTTOSET[3]+ " " + LOTTOSET[4]+ " " + LOTTOSET[5]+ " 보너스번호 "+ LOTTOSETBONUS[0]+"\n"+
                    LOTTOSET[6]+ " " + LOTTOSET[7]+ " " + LOTTOSET[8]+ " " + LOTTOSET[9]+ " " + LOTTOSET[10]+ " " + LOTTOSET[11]+ " 보너스번호 "+ LOTTOSETBONUS[1]+"\n"+
                    LOTTOSET[12]+ " " + LOTTOSET[13]+ " " + LOTTOSET[14]+ " " + LOTTOSET[15]+ " " + LOTTOSET[16]+ " " + LOTTOSET[17]+ " 보너스번호 "+ LOTTOSETBONUS[2]+"\n"+
                    LOTTOSET[18]+ " " + LOTTOSET[19]+ " " + LOTTOSET[20]+ " " + LOTTOSET[21]+ " " + LOTTOSET[22]+ " " + LOTTOSET[23]+ " 보너스번호 "+ LOTTOSETBONUS[3]+"\n"+
                    LOTTOSET[24]+ " " + LOTTOSET[25]+ " " + LOTTOSET[26]+ " " + LOTTOSET[27]+ " " + LOTTOSET[28]+ " " + LOTTOSET[29]+ " 보너스번호 "+ LOTTOSETBONUS[4]);
}

//모두 멘션
if(sender === "S u n n y"||"S S"||"@류박사/95/일산"||"heath/92/경주"){
    if(msg == "/버스터콜"){
        
        replier.reply("@heath/92/경주 @S u n n y @류박사/95/일산 @BBABs @Dr.Fox komea 2001 김해 @S S @Ɽ₳₦₲ɆⱤ 116 @구파리/77/전남 @굿나이스38 @깜코이모/경북/84 @다복운.83.부천 @대갈골무 @댈리 03 서울 @댈리 03 서울 @디지털노마드78/78/서울 @로드 @마마무 홍대89 @멜다니 78 @미생물 @미소/부천/1 @바다/84/안양 @배현성 70년생 @병사주둔지/88/시흥/화성/전라도광주 @볼매&다르핀 대구84 @설탕커피/46 @수키수키수키 @스캇no1 @싸리없어/29 @써니타도위원장/83/화성/샤토 문 @아이렌/전북/86 @안규현 @야마/75/평택 @어둠의 암살자 89 경기도 @엄마몰레. 27 @연이아빠/82~83/서울,인천공항 @와장.67 김포 @육신/93/포항 @ㅈ1ㄴ1 @전생하루31 @죽고싶지않아 / 35 @피터팬/83/광주 @헬프미 @CaptainKIM/91/대전 ");
        replier.reply("@DandiDDokDI.86.창원 @doraji1228/36 @Escaplowne 33 @Esposa.72.서울 @HEAT,아르,무명왕/91/남양주 @Isis(이시스) @jjang7/부산 @Kosy.87.제주 @MattSeo/93/오산 @MrOrigin / 81 / 부천 @NaDa @NEET @pippo55 @RUBIN 85 의정부 @Rugby/83/서울 @Santa 헌터/53 @SSGPS/76/광주여라 @Starlight sky 86 노원 @The_Red.퓨리.116 @YongE /90/부산 @yuri유리.82.인천 @Zenian / 78 @⭐SeoYeon⭐/77/인천")
        replier.reply("@heath/92/경주 @S u n n y @류박사/95/일산 @BBABs @Dr.Fox komea 2001 김해 @S S @Ɽ₳₦₲ɆⱤ 116 @구파리/77/전남 @굿나이스38 @깜코이모/경북/84 @다복운.83.부천 @대갈골무 @댈리 03 서울 @댈리 03 서울 @디지털노마드78/78/서울 @로드 @마마무 홍대89 @멜다니 78 @미생물 @미소/부천/1 @바다/84/안양 @배현성 70년생 @병사주둔지/88/시흥/화성/전라도광주 @볼매&다르핀 대구84 @설탕커피/46 @수키수키수키 @스캇no1 @싸리없어/29 @써니타도위원장/83/화성/샤토 문 @아이렌/전북/86 @안규현 @야마/75/평택 @어둠의 암살자 89 경기도 @엄마몰레. 27 @연이아빠/82~83/서울,인천공항 @와장.67 김포 @육신/93/포항 @ㅈ1ㄴ1 @전생하루31 @죽고싶지않아 / 35 @피터팬/83/광주 @헬프미 @CaptainKIM/91/대전 @DandiDDokDI.86.창원 @doraji1228/36 @Escaplowne 33 @Esposa.72.서울 @HEAT,아르,무명왕/91/남양주 @Isis(이시스) @jjang7/부산 @Kosy.87.제주 @MattSeo/93/오산 @MrOrigin / 81 / 부천 @NaDa @NEET @pippo55 @RUBIN 85 의정부 @Rugby/83/서울 @Santa 헌터/53 @SSGPS/76/광주여라 @Starlight sky 86 노원 @The_Red.퓨리.116 @YongE /90/부산 @yuri유리.82.인천 @Zenian / 78 @⭐SeoYeon⭐/77/인천 ");
    }
}












/* red 프로필 
@heath/92/경주 @S u n n y @류박사/95/일산 @BBABs @Dr.Fox komea 2001 김해 @S S @Ɽ₳₦₲ɆⱤ 116 @구파리/77/전남 @굿나이스38 @깜코이모/경북/84 @다복운.83.부천 @대갈골무 @댈리 03 서울 @댈리 03 서울 @디지털노마드78/78/서울 @로드 @마마무 홍대89 @멜다니 78 @미생물 @미소/부천/1 @바다/84/안양 @배현성 70년생 @병사주둔지/88/시흥/화성/전라도광주 @볼매&다르핀 대구84 @설탕커피/46 @수키수키수키 @스캇no1 @싸리없어/29 @써니타도위원장/83/화성/샤토 문 @아이렌/전북/86 @안규현 @야마/75/평택 @어둠의 암살자 89 경기도 @엄마몰레. 27 @연이아빠/82~83/서울,인천공항 @와장.67 김포 @육신/93/포항 @ㅈ1ㄴ1 @전생하루31 @죽고싶지않아 / 35 @피터팬/83/광주 @헬프미 @CaptainKIM/91/대전 @DandiDDokDI.86.창원 @doraji1228/36 @Escaplowne 33 @Esposa.72.서울 @HEAT,아르,무명왕/91/남양주 @Isis(이시스) @jjang7/부산 @Kosy.87.제주 @MattSeo/93/오산 @MrOrigin / 81 / 부천 @NaDa @NEET @pippo55 @RUBIN 85 의정부 @Rugby/83/서울 @Santa 헌터/53 @SSGPS/76/광주여라 @Starlight sky 86 노원 @The_Red.퓨리.116 @YongE /90/부산 @yuri유리.82.인천 @Zenian / 78 @⭐SeoYeon⭐/77/인천 
*/




/*--------------- 구현불가능 ---------------------------------------------------------------
//알람기능

    if(msg == "/현재시간"){
        replier.reply(year + " " + month+ " " + date+ " " + hours+ " " + minutes + " " + second)
    }

//병사훈련

    if(day == 1 && (hours == 14 || 17|| 22)&& minutes == 5 && second == 0){
        replier.reply(hours+"시 5분입니다. 병사훈련 시간입니다.");
    }
    if(day == 2 && (hours == 1 || 6 || 9 || 18)&& minutes == 5 && second == 0){
        replier.reply(hours+"시 5분입니다. 병사훈련 시간입니다.");
    }
    if(day == 3 && (hours == 2 || 10)&& minutes == 5 && second == 0){
        replier.reply(hours+"시 5분입니다. 병사훈련 시간입니다.");
    }
    if(day == 5 && (hours == 16 || 17)&& minutes == 5 && second == 0){
        replier.reply(hours+"시 5분입니다. 병사훈련 시간입니다.");
    }
    if(day == 6 && (hours == 0 || 1 || 8 || 9 || 17 || 18)&& minutes == 5 && second == 0){
        replier.reply(hours+"시 5분입니다. 병사훈련 시간입니다.");
    }
    if(day == 0 && (hours == 1 || 2|| 9 || 10)&& minutes == 5 && second == 0){
        replier.reply(hours+"시 5분입니다. 병사훈련 시간입니다.");
    }
    if(day == 2 && (hours == 20 || 21 || 22)&& minutes == 5 && second == 0){
        replier.reply(hours+"시 5분입니다. 병사훈련 시간입니다.");
    }

----------------------------------------------------------------------------------------*/


}
