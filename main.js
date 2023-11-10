

// function dataPrint(data) {
//     //jsontext에 JSON객체를 넣는다. 	
// 	var jsontext = evt.data; 
	
// 	//JSON.parse를 이용해 jsontext를 파싱해 contact 변수에 넣어준다. 	
// 	var contact = JSON.parse(jsontext); 
	
// 	//for문을 돌면서 contact[i]의 값을 출력한다. 	
// 	for (var i = 0; i < contact.length; i++) { 	
// 		console.log(contact[i]); 		
// 	} 	
// }

// function getDataFromDatabase() {
//     // 클라이언트에서 서버로 HTTP 요청을 보내는 부분
//     fetch('http://172.21.116.167:59999/getDataFromDatabase')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(`HTTP 오류! 상태: ${response.status}`);
//             }
//             return response.json();
//         })
//         .then(data => {
//             // 데이터를 콘솔에 출력
//             console.log('서버에서 받은 데이터:', data);

//             // 출력된 데이터를 화면에 표시하는 부분
//             //displayData(data);
//             //dataPrint(data);
//         })
//         .catch(error => {
//             console.error('오류:', error);
//             // JSON 데이터를 가져오지 못한 경우에 경고창 띄우기
            
//             alert('서버에서 데이터를 가져오지 못했습니다. 나중에 다시 시도해주세요.');
//         });
// }

// //데이터 읽어오기
// getDataFromDatabase();


// main.html에서 새로운 box를 생성하는 함수
function createDiv() {
   


    // 컨테이너에 들어갈 박스 템플릿 생성
    con = document.getElementById('container');
    text = document.getElementById('cate_input');
    const newDiv = document.createElement('div');
    newDiv.className = 'box'
    newDiv.style.background = "board.jpg"

    if(text.value == ""){
        alert("카테고리를 입력해야 합니다.");
        return;
    }
    // 입력칸에 있는 값을 불러와 카테고리 제목으로 설정
    // 시험지 수 라는 임시 문구를 결합하여 Child로 설정
    var p1 = document.createElement('div');
    //var str = String.trim(text.value);
    //p1.innerHTML = '<b>' + str + '</b> <br/>시험지 수 : 1000<p></p>';
    p1.innerHTML = '<b>' + text.value + '</b> <br/>시험지 수 : 1000<p></p>';
    

   
    newDiv.appendChild(p1);
    text.value = "";

    // 버튼 생성
    // 1. 문제 생성
    // 2. 문제 보기
    button1 = document.createElement('button');
    button1.className = "pro_crt";
    button1.innerHTML ="문제 생성";
    button1.addEventListener("click", moveToCreateHTML);
    newDiv.appendChild(button1);

    var p2 = document.createElement('div');
    p2.innerHTML = "<hr class='line'>";
    newDiv.appendChild(p2);

    button2 = document.createElement('button');
    button2.className = "pro_view";
    button2.innerHTML ="문제 보기";
    button2.addEventListener("click", moveToSolveHTML);
    newDiv.appendChild(button2);
    
    // 모든 리소스 생성 및 박스 클래스와 결합되면
    // box 클래스를 컨테이너에 결합
    con.appendChild(newDiv);
    } 

    function moveToCreateHTML(category){
        category = "문학";
        window.location.href = 'createQuiz.html?' + category;
    }

    function moveToSolveHTML(category){
        category = "문학";
        window.location.href = 'selectQuiz.html?' + category;
    }