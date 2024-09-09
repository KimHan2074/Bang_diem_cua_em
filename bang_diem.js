function OK(){
    var se1= parseFloat(document.getElementById("nhap_1").value);
    var se2= parseFloat(document.getElementById("nhap_2").value);
    var year= document.getElementById("nhap_3");
    var value= year.options[year.selectedIndex].value;
    value= parseInt(value);
    var sum;
    var xeploai;

    switch(value){
        case 1:
            sum=(se1+(se2*2))/3;
            document.getElementById("result").value=sum;
            break;

        case 2:
            sum=((se1*2)+(se2*3))/5;
            document.getElementById("result").value=sum;
            break;

        case 3:
            sum=((se1*3)+(se2*4))/7;
            document.getElementById("result").value=sum;
            break;
    }

    if(sum>=9){
        xeploai="Học sinh giỏi";
        document.getElementById("ketqua").style.color="red";
    }
    else if(sum>=7 && sum<9){
        xeploai="Học sinh khá";
        document.getElementById("ketqua").style.color="brown";
    }
    else{
        xeploai="Học sinh trung bình";
        document.getElementById("ketqua").style.color="yellow";
    }
    document.getElementById("ketqua").innerHTML=xeploai;
}

function Cancel(){
    document.getElementById("hop_input").reset();
    document.getElementById("ketqua").innerHTML="";
}