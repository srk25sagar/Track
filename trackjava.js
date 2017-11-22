function validate() {

    if(document.getElementById("selecttag").value=="")
    {
    alert( "Please provide Order name!" );
    return false;
    }

    if(document.getElementById("selecttag1").value=="select")
    {
    alert( "Please Select Form address!" );
    return false;
    }

    if(document.getElementById("selecttag2").value=="select")
    {
    alert( "Please Select To address!" );
    return false;
    }
    if(document.getElementById("selecttag3").value=="select")
    {
    alert( "Please Select Order type!" );
    return false;
    }
    if(document.myform.Address.value=="")
    {
    alert( "Please provide Address!" );
    return false;
    }
    if(document.myform.Address1.value=="")
    {
    alert( "Please provide Address!" );
    return false;
    }
    if(document.myform.ItemCount.value=="")
    {
    alert( "Please provide Item Count!" );
    return false;
    }
}
