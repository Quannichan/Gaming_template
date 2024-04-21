window.onscroll = function() {myFunction()};
function myFunction() {
    var text =  document.getElementById("header01");
    var text1 =  document.getElementById("text01");
    var line =  document.getElementById("line1");
    var vid =  document.getElementById("video_back");
    var text2 =  document.getElementById("wrap_text02");
    var text3 =  document.getElementById("wrap_text03");
    var menu =  document.getElementById("Menu_wrap");
    var content2 =  document.getElementById("content02");
    var box_content1 = document.getElementById("box_content1");
    var line_bet1 = document.getElementById("line_bet1");
    var text_ct1 = document.getElementById("text_ct1");
    var wrap_img2 = document.getElementById("wrap_img2")
    var line_bet2 = document.getElementById("line_bet2");
    var tct2 = document.getElementById("tct2");
    var wrap_img1 = document.getElementById("wrap_img1");
    var img1 = document.getElementById("img1");
    var img2 = document.getElementById("img2");
    var box_3d = document.getElementById("wrap_3D_box");
    var line_bet3 = document.getElementById("line_bet3");
    var wrap_content4 = document.getElementById("wrap_content4");
    var wrap_content5 = document.getElementById("wrap_content5");
    var line_bet4 = document.getElementById("line_bet4");
    var line_bet5 = document.getElementById("line_bet5");
    
  if ( document.documentElement.scrollTop > 570 && document.documentElement.scrollTop < 1200) {
   text2.style.opacity = '1';
  }else{
    text2.style.opacity = '0';
  }
  if ( document.documentElement.scrollTop > 1200 && document.documentElement.scrollTop < 1500) {
    text3.style.opacity = '1';
   }else{
     text3.style.opacity = '0';
   }
  if(document.documentElement.scrollTop > 550){
    text.style.opacity = '0';
    text1.style.opacity = '0';
    line.style.opacity = '0';
  }else if(document.documentElement.scrollTop < 150){
    text.style.opacity = '1';
    text1.style.opacity = '1';
    line.style.opacity = '1';
  }
  if(document.documentElement.scrollTop < 200){
    vid.style.filter = 'blur(0px)';
    vid.style.width = '100%';
    vid.style.height='100%';
    vid.style.right='0%';
    vid.style.bottom='0%';
  }else if(document.documentElement.scrollTop > 200 && document.documentElement.scrollTop < 450){
    vid.style.filter = 'blur(5px)';
    vid.style.width = '85%';
    vid.style.height='85%';
    vid.style.right='8%';
    vid.style.bottom='3%';
  }else if(document.documentElement.scrollTop > 450 && document.documentElement.scrollTop < 700 ){
    vid.style.filter = 'blur(10px)';
    vid.style.width = '70%';
    vid.style.height='70%';
    vid.style.right='15%';
    vid.style.bottom='10%';
  }else if(document.documentElement.scrollTop > 700 && document.documentElement.scrollTop < 950 ){
    vid.style.filter = 'blur(15px)';
    vid.style.width = '55%';
    vid.style.height='55%';
    vid.style.right='23%';
    vid.style.bottom='20%';
  }else if(document.documentElement.scrollTop > 950 && document.documentElement.scrollTop < 1200 ){
    vid.style.filter = 'blur(20px)';
    vid.style.width = '40%';
    vid.style.height='40%';
    vid.style.right='30%';
    vid.style.bottom='25%';
  }else if(document.documentElement.scrollTop > 1200 ){
    vid.style.filter = 'blur(30px)';
    vid.style.width = '40%';
    vid.style.height='40%';
    vid.style.right='30%';
    vid.style.bottom='25%';
  }
  if(document.documentElement.scrollTop > 1900 ){
    menu.style.position='fixed';
    menu.style.top='0';
    menu.style.marginTop='0';
    content2.style.marginTop='25%';
    box_content1.style.marginLeft="0";
    box_content1.style.width="100%";
    line_bet1.style.height="330px";
    text_ct1.style.opacity="1"
    img1.style.boxShadow="0px 0px 1000px white";
    img1.style.opacity="1";
  }else{
    menu.style.position='relative';
    content2.style.marginTop='0';
    menu.style.marginTop='20%';
    box_content1.style.marginLeft="27%";
    img1.style.boxShadow="0px 0px 0px white";
    img1.style.opacity="0";
    box_content1.style.width="100%";
    line_bet1.style.height="0px";
    text_ct1.style.opacity="0"
    
  }
  if(document.documentElement.scrollTop > 2400){
    wrap_img2.style.opacity="1";
    img2.style.boxShadow="0px 0px 1000px white";
  }else{
    wrap_img2.style.opacity="0";
    img2.style.boxShadow="0px 0px 0px white";
  }
  if(document.documentElement.scrollTop > 2800){
    line_bet2.style.width="100%";
    tct2.style.opacity="1";
    
  }else{
    line_bet2.style.width="0px";
    tct2.style.opacity="0";
  }

  if(document.documentElement.scrollTop > 3300){
    box_3d.style.opacity="1";
    line_bet3.style.height="450px"
  }else{
    box_3d.style.opacity="0";
    line_bet3.style.height="0px"
  }

  if(document.documentElement.scrollTop > 4000){
    wrap_content4.style.opacity = "1";
  }else{
    wrap_content4.style.opacity = "0";
  }

  if(document.documentElement.scrollTop > 4620){
    wrap_content5.style.opacity="1";
    line_bet4.style.width="70%"
    line_bet5.style.width="70%"
  }else{
    wrap_content5.style.opacity="0";
    line_bet4.style.width="0%";
    line_bet5.style.width="00%";
  }
}