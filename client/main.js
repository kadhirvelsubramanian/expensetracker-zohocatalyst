var is_logged_in=false;
var role_name,userID;
var content
async function user_option()
{
    await fetch_insert_url();
    const user_set=new Set();
    for(let i=0;i<size;i++)
    {
        user_set.add(data[i].CREATORID)
    }
    user_set.forEach(value=>
    {
        var sel=document.getElementById("user_select")
        var option=document.createElement("option")
        option.textContent=value
        sel.append(option)
    }
    )
}
window.onload=async function()
{
    var userManagement= catalyst.auth;
    var current_user= userManagement.isUserAuthenticated()
    await current_user.then(msg=>
    {
        is_logged_in =true
    })
    .catch(err=>
    {
        is_logged_in=false
    })
    if(!is_logged_in)
    {
        document.getElementById("home_page").style.display="none";
        document.getElementById("home_page_admin").style.display="none"
        document.getElementById("login_home_page").style.display="flex";
    }
    else
    {
        var user=catalyst.userManagement;
        var pro_user=user.getCurrentProjectUser()
        await pro_user.then(response => {
        content = response.content;
        })
        role_name=content.role_details.role_name;
        userID=content.user_id;
        document.getElementById("login_home_page").style.display="none";
        if(role_name=="App User")
        {
            document.getElementById("home_page").style.display="flex";
            print_expense()
        }
        else
        {
            document.getElementById("home_page_admin").style.display="flex";
            print_admin_expense();
        }
    }
}
function logout_func()
{
    // document.getElementById("login_home_page").style.display="flex";
    // document.getElementById("home_page").style.display="none";

    // var redirectURL = "http://localhost:3000/app/index.html";

    var redirectURL;
    if (window.location.hostname === "localhost") 
    {
        redirectURL = "http://localhost:3000/app/index.html"; 
    } 
    else 
    {
        redirectURL = "https://expensetracker-60034374144.development.catalystserverless.in/app/index.html";
    }
    
    var auth = catalyst.auth;
    auth.signOut(redirectURL);
}
function signin_func()
{
    document.getElementById("login_home_page").style.display="none";
    document.getElementById("home_page").style.display="none";
    document.getElementById("login_back").style.display="flex";
    var auth=catalyst.auth
    catalyst.auth.signIn("login_container");
}
function home()
{
    document.getElementById("home").style.display="flex"
    document.getElementById("expenses").style.display="none"
    document.getElementById("report").style.display="none";
    document.getElementById("profile").style.display="none";
    // document.getElementById("anal").style.display="none";

    var home=document.getElementById("homebut")
    var exp=document.getElementById("expbut")
    var rep=document.getElementById("repbut")
    var pro=document.getElementById("probut")
    // var anal=document.getElementById("analbut")

    if(document.getElementById("pro_body")!=null)
    {
        document.getElementById("pro_body").remove()
    }

    home.style.fontWeight="bold";
    home.style.textDecoration="underline";    

    exp.style.fontWeight="normal";
    exp.style.textDecoration="none";

    rep.style.fontWeight="normal";
    rep.style.textDecoration="none"

    // anal.style.fontWeight="normal";
    // anal.style.textDecoration="none"

    pro.style.fontWeight="normal";
    pro.style.textDecoration="none"
}
function expenses()
{
    document.getElementById("home").style.display="none"
    document.getElementById("expenses").style.display="flex"
    document.getElementById("report").style.display="none";
    document.getElementById("profile").style.display="none";
    // document.getElementById("anal").style.display="none";

    if(document.getElementById("pro_body")!=null)
    {
        document.getElementById("pro_body").remove()
    }

    var home=document.getElementById("homebut")
    var exp=document.getElementById("expbut")
    var rep=document.getElementById("repbut")
    var pro=document.getElementById("probut")
    // var anal=document.getElementById("analbut")

    home.style.fontWeight="normal";
    home.style.textDecoration="none";    

    exp.style.fontWeight="bold";
    exp.style.textDecoration="underline";

    rep.style.fontWeight="normal";
    rep.style.textDecoration="none"

    // anal.style.fontWeight="normal";
    // anal.style.textDecoration="none"    

    pro.style.fontWeight="normal";
    pro.style.textDecoration="none"
}
function report()
{
    document.getElementById("home").style.display="none"
    document.getElementById("expenses").style.display="none"
    document.getElementById("report").style.display="flex";
    document.getElementById("profile").style.display="none";
    // document.getElementById("anal").style.display="none";
    
    var home=document.getElementById("homebut")
    var exp=document.getElementById("expbut")
    var rep=document.getElementById("repbut")
    var pro=document.getElementById("probut")
    // var anal=document.getElementById("analbut")

    if(document.getElementById("pro_body")!=null)
    {
        document.getElementById("pro_body").remove()
    }

    home.style.fontWeight="normal";
    home.style.textDecoration="none";    

    exp.style.fontWeight="normal";
    exp.style.textDecoration="none";

    rep.style.fontWeight="bold";
    rep.style.textDecoration="underline"

    // anal.style.fontWeight="normal";
    // anal.style.textDecoration="none" 

    pro.style.fontWeight="normal";
    pro.style.textDecoration="none"
}
// function anal()
// {
//     document.getElementById("home").style.display="none"
//     document.getElementById("expenses").style.display="none"
//     document.getElementById("report").style.display="none";
//     document.getElementById("anal").style.display="flex";
//     document.getElementById("profile").style.display="none";

    
//     var home=document.getElementById("homebut")
//     var exp=document.getElementById("expbut")
//     var rep=document.getElementById("repbut")
//     var anal=document.getElementById("analbut")
//     var pro=document.getElementById("probut")

//     if(document.getElementById("pro_body")!=null)
//     {
//         document.getElementById("pro_body").remove()
//     }

//     home.style.fontWeight="normal";
//     home.style.textDecoration="none";    

//     exp.style.fontWeight="normal";
//     exp.style.textDecoration="none";

//     rep.style.fontWeight="normal";
//     rep.style.textDecoration="none"

//     anal.style.fontWeight="bold";
//     anal.style.textDecoration="underline" 
    
//     pro.style.fontWeight="normal";
//     pro.style.textDecoration="none"
// }
function profile()
{
    document.getElementById("home").style.display="none"
    document.getElementById("expenses").style.display="none"
    document.getElementById("report").style.display="none";
    // document.getElementById("anal").style.display="none";
    document.getElementById("profile").style.display="flex";

    
    var home=document.getElementById("homebut")
    var exp=document.getElementById("expbut")
    var rep=document.getElementById("repbut")
    // var anal=document.getElementById("analbut")
    var pro=document.getElementById("probut")

    home.style.fontWeight="normal";
    home.style.textDecoration="none"; 

    exp.style.fontWeight="normal";
    exp.style.textDecoration="none";    

    rep.style.fontWeight="normal";
    rep.style.textDecoration="none"

    // anal.style.fontWeight="normal";
    // anal.style.textDecoration="none" 

    pro.style.fontWeight="bold";
    pro.style.textDecoration="underline"
    profile_content();
}
var data;
var size;
async function fetch_insert_url()
{
    data=await fetch(window.location.origin+"/server/expense_tracker_function/getdata")
    .then(res=>res.json())
    .catch(err=>err)
    size=data.length
}
async function print_expense()
{
    await fetch_insert_url()
    for(let i=0;i<size;i++)
    {
        var add=document.createElement('div')
        add.id="added_exp"
        
        var exp=document.createElement("div")
        exp.id="type_exp"
        exp.textContent=data[i].ExpenseName

        var approved=document.createElement("div")
        approved.id="approved"
        approved.textContent=data[i].IsApproved
        var check=data[i].IsApproved

        var amount=document.createElement("div")
        amount.id="amount"
        amount.textContent=data[i].Amount
        
        add.append(exp)
        add.append(approved)
        add.append(amount)

        if(check=="Yes")
        {
            add.style.backgroundColor="#4CAF50"
        }
        else if(check=="No")
        {
            add.style.backgroundColor="#F44336"
        }
        else
        {
            add.style.backgroundColor="#FFEB3B"
        }
        document.getElementById("one_exp").append(add)
    }
    data=""
    size=0
}
function add_expense()
{
    document.getElementById("back").style.display="flex"
}
function close_form()
{
    document.getElementById("back").style.display="none";
    document.getElementById("input_amount").value=""
    document.getElementById("expense_select").value=""
}
function submit_form()
{
    var selected_expense=document.getElementById("expense_select")
    var amount=document.getElementById("input_amount")
    if(selected_expense.value=='' ||amount.value=='')
    {
        alert("Kindly Fill all the details Before Submitting")
    }
    else
    {
        async function insert_expense()
        {
            await fetch("http://localhost:3000/server/expense_tracker_function/insert",{
            method:'POST',
            headers: {  'Content-Type': 'application/json' },
            body:JSON.stringify({
                "Amount":amount.value,
                "ExpenseName":selected_expense.value,
                "IsApproved":"Pending"
            })
            })
        }
        insert_expense()
    }
    document.getElementById("one_exp").textContent=""
    print_expense();
    close_form();
}
var myPieChart;
async function view_pie()
{
    await fetch_insert_url()
    my_dict={}
    var total_amount=0
    for(let i=0;i<size;i++)
    {
        total_amount+=Number(data[i].Amount)
        if(!(data[i].ExpenseName in my_dict))
        {
            my_dict[data[i].ExpenseName]=data[i].Amount;
        }
        else{
            let temp=Number(my_dict[data[i].ExpenseName])
            temp+=Number(data[i].Amount)
            my_dict[data[i].ExpenseName]=temp
        }
    }
    var label=[];
    var values=[];
    var my_bg=[];
    for(let key in my_dict)
    {
        label.push(key)
        values.push(my_dict[key])

        var r=Math.floor(Math.random() * 256);
        var g=Math.floor(Math.random() * 256);
        var b=Math.floor(Math.random() * 256);
        my_bg.push(`rgb(${r}, ${g}, ${b})`)
    }


    document.getElementById("pie_back").style.display="flex";
    var ctx = document.getElementById('myPieChart').getContext('2d');

    myPieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: label,
        datasets: [{
          label: 'Expenses',
          data: values,
          backgroundColor: my_bg,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            labels:{
                color:"black",
                font:{
                        size:14
                    }
            }
          },
          tooltip: {
            enabled: true
          }
        }
      }
    });
    data={}
    size=0;
}
function close_pie()
{
    document.getElementById("pie_back").style.display="none"
    myPieChart.destroy();
}
async function view_exp()
{
    document.getElementById("exp_back").style.display="flex";

    await fetch_insert_url()
    my_dict={}
    var total_amount=0
    for(let i=0;i<size;i++)
    {
        total_amount+=Number(data[i].Amount)
        if(!(data[i].ExpenseName in my_dict))
        {
            my_dict[data[i].ExpenseName]=data[i].Amount;
        }
        else{
            let temp=Number(my_dict[data[i].ExpenseName])
            temp+=Number(data[i].Amount)
            my_dict[data[i].ExpenseName]=temp
        }
    }
    for(key in my_dict)
    {
        var name=document.createElement("td");
        var amount=document.createElement("td");
        name.textContent=key;
        name.id="table"
        amount.textContent=my_dict[key];
        amount.id="table"
        var row=document.createElement("tr");
        row.append(name)
        row.append(amount)
        document.getElementById("exp_table").append(row);
    }
}
function close_exp()
{
    document.getElementById("exp_back").style.display="none"
    let tab=document.getElementById("exp_table")
    var row=tab.getElementsByTagName("tr");
    while(row.length>1)
    {
        tab.deleteRow(1)
    }
}
async function view_pen()
{
    document.getElementById("pen_back").style.display="flex";

    await fetch_insert_url()
    my_dict={}
    var total_amount=0
    for(let i=0;i<size;i++)
    {
        if(data[i].IsApproved=="Yes")
        {
        total_amount+=Number(data[i].Amount)
        if(!(data[i].ExpenseName in my_dict))
        {
            my_dict[data[i].ExpenseName]=data[i].Amount;
        }
        else{
            let temp=Number(my_dict[data[i].ExpenseName])
            temp+=Number(data[i].Amount)
            my_dict[data[i].ExpenseName]=temp
        }
        }
    }
    for(key in my_dict)
    {
        var name=document.createElement("td");
        var amount=document.createElement("td");
        name.textContent=key;
        name.id="table"
        amount.textContent=my_dict[key];
        amount.id="table"
        var row=document.createElement("tr");
        row.append(name)
        row.append(amount)
        document.getElementById("pen_table").append(row);
    }
}
function close_pen()
{
    document.getElementById("pen_back").style.display="none"
    let tab=document.getElementById("pen_table")
    var row=tab.getElementsByTagName("tr");
    while(row.length>1)
    {
        tab.deleteRow(1)
    }
}
var myBarChart;
async function view_bar()
{
    await fetch_insert_url()
    my_dict={}
    for(let i=0;i<size;i++)
    {
        if(!(data[i].ExpenseName in my_dict))
        {
            my_dict[data[i].ExpenseName]=data[i].Amount;
        }
        else{
            let temp=Number(my_dict[data[i].ExpenseName])
            temp+=Number(data[i].Amount)
            my_dict[data[i].ExpenseName]=temp
        }
    }
    var labels=[];
    var bar_data=[];
    var bg_color=[];
    var border_color=[];
    for(let key in my_dict)
    {
        labels.push(key);
        bar_data.push(my_dict[key])
        var r=Math.floor(Math.random() * 256);
        var g=Math.floor(Math.random() * 256);
        var b=Math.floor(Math.random() * 256);
        bg_color.push(`rgba(${r}, ${g}, ${b},0.2`)
        border_color.push(`rgba(${r}, ${g}, ${b},1`)
    }
  document.getElementById("bar_back").style.display="flex";  
  const ctx = document.getElementById('myBarChart').getContext('2d');
  myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels:labels,
      datasets: [{
        label: 'Expenses ($)',
        data: bar_data,
        backgroundColor:bg_color,
        borderColor:border_color,
        borderWidth: 1
      }]
    },
    options: {
        plugins: {
          legend: {
            display: true, 
            position: 'top',
            labels: {
              font: {
                size: 14,  
                family: 'Arial', 
                weight: 'bold'
              },
              color: 'rgb(0, 0, 0)' 
            }
          }
        },
        barPercentage:0.9,
      }
  });
}
function close_bar()
{
    document.getElementById("bar_back").style.display="none";
    myBarChart.destroy();
}
function admin_home()
{
    document.getElementById("admin_home").style.display="flex"
    document.getElementById("admin_expenses").style.display="none";
    document.getElementById("admin_report").style.display="none";
    document.getElementById("admin_profile").style.display="none";
    document.getElementById("admin_anal").style.display="none";
    document.body.style.marginTop ="170px";
    
    var home=document.getElementById("admhomebut")
    var exp=document.getElementById("admexpbut")
    var rep=document.getElementById("admrepbut")
    var pro=document.getElementById("admprobut")
    var anal=document.getElementById("admanalbut")

    if(document.getElementById("pro_body")!=null)
    {
        document.getElementById("pro_body").remove()
    }
    let tab=document.getElementById("admin_anal_table")
    var row=tab.getElementsByTagName("tr");
    while(row.length>1)
    {
        tab.deleteRow(1)
    }

    home.style.fontWeight="bold";
    home.style.textDecoration="underline";

    exp.style.fontWeight="normal";
    exp.style.textDecoration="none";

    rep.style.fontWeight="normal";
    rep.style.textDecoration="none"

    pro.style.fontWeight="normal";
    pro.style.textDecoration="none"

    anal.style.fontWeight="normal";
    anal.style.textDecoration="none"
}
function admin_expenses()
{
    document.getElementById("admin_home").style.display="none"
    document.getElementById("admin_expenses").style.display="flex";
    document.getElementById("admin_report").style.display="none";
    document.getElementById("admin_profile").style.display="none";
    document.getElementById("admin_anal").style.display="none";
    document.body.style.marginTop ="151px";
    
    var home=document.getElementById("admhomebut")
    var exp=document.getElementById("admexpbut")
    var rep=document.getElementById("admrepbut")
    var pro=document.getElementById("admprobut")
    var anal=document.getElementById("admanalbut")

    if(document.getElementById("pro_body")!=null)
    {
        document.getElementById("pro_body").remove()
    }
    let tab=document.getElementById("admin_anal_table")
    var row=tab.getElementsByTagName("tr");
    while(row.length>1)
    {
        tab.deleteRow(1)
    }

    home.style.fontWeight="normal";
    home.style.textDecoration="none";
    
    exp.style.fontWeight="bold";
    exp.style.textDecoration="underline";
    
    rep.style.fontWeight="normal";
    rep.style.textDecoration="none"

    pro.style.fontWeight="normal";
    pro.style.textDecoration="none"

    anal.style.fontWeight="normal";
    anal.style.textDecoration="none"
}
function admin_report()
{
    document.getElementById("admin_home").style.display="none"
    document.getElementById("admin_expenses").style.display="none";
    document.getElementById("admin_report").style.display="flex";
    document.getElementById("admin_profile").style.display="none";
    document.getElementById("admin_anal").style.display="none";
    document.body.style.marginTop ="170px";
    
    var home=document.getElementById("admhomebut")
    var exp=document.getElementById("admexpbut")
    var rep=document.getElementById("admrepbut")
    var pro=document.getElementById("admprobut")
    var anal=document.getElementById("admanalbut")

    if(document.getElementById("pro_body")!=null)
    {
        document.getElementById("pro_body").remove()
    }
    let tab=document.getElementById("admin_anal_table")
    var row=tab.getElementsByTagName("tr");
    while(row.length>1)
    {
        tab.deleteRow(1)
    }

    home.style.fontWeight="normal";
    home.style.textDecoration="none";

    exp.style.fontWeight="normal";
    exp.style.textDecoration="none";

    rep.style.fontWeight="bold";
    rep.style.textDecoration="underline"

    pro.style.fontWeight="normal";
    pro.style.textDecoration="none"

    anal.style.fontWeight="normal";
    anal.style.textDecoration="none"
}
function admin_anal()
{
    document.getElementById("admin_home").style.display="none"
    document.getElementById("admin_expenses").style.display="none";
    document.getElementById("admin_report").style.display="none";
    document.getElementById("admin_profile").style.display="none";
    document.getElementById("admin_anal").style.display="flex";
    document.body.style.marginTop ="170px";

    user_option();
    
    var home=document.getElementById("admhomebut")
    var exp=document.getElementById("admexpbut")
    var rep=document.getElementById("admrepbut")
    var pro=document.getElementById("admprobut")
    var anal=document.getElementById("admanalbut")

    if(document.getElementById("pro_body")!=null)
    {
        document.getElementById("pro_body").remove()
    }

    home.style.fontWeight="normal";
    home.style.textDecoration="none";

    exp.style.fontWeight="normal";
    exp.style.textDecoration="none";

    rep.style.fontWeight="normal";
    rep.style.textDecoration="none"

    pro.style.fontWeight="normal";
    pro.style.textDecoration="none"

    anal.style.fontWeight="bold";
    anal.style.textDecoration="underline";

    admin_anal_table()
}
function admin_profile()
{
    document.getElementById("admin_home").style.display="none"
    document.getElementById("admin_expenses").style.display="none";
    document.getElementById("admin_report").style.display="none";
    document.getElementById("admin_profile").style.display="flex";
    document.getElementById("admin_anal").style.display="none";
    document.body.style.marginTop ="170px";

    var home=document.getElementById("admhomebut")
    var exp=document.getElementById("admexpbut")
    var rep=document.getElementById("admrepbut")
    var pro=document.getElementById("admprobut")
    var anal=document.getElementById("admanalbut")

    let tab=document.getElementById("admin_anal_table")
    var row=tab.getElementsByTagName("tr");
    while(row.length>1)
    {
        tab.deleteRow(1)
    }

    home.style.fontWeight="normal";
    home.style.textDecoration="none";

    exp.style.fontWeight="normal";
    exp.style.textDecoration="none";

    rep.style.fontWeight="normal";
    rep.style.textDecoration="none"

    pro.style.fontWeight="bold";
    pro.style.textDecoration="underline"

    anal.style.fontWeight="normal";
    anal.style.textDecoration="none"
    admin_profile_content();
}
var adminPieChart;
async function admin_view_pie()
{
    await fetch_insert_url()
    my_dict={}
    var total_amount=0
    for(let i=0;i<size;i++)
    {
        total_amount+=Number(data[i].Amount)
        if(!(data[i].ExpenseName in my_dict))
        {
            my_dict[data[i].ExpenseName]=data[i].Amount;
        }
        else{
            let temp=Number(my_dict[data[i].ExpenseName])
            temp+=Number(data[i].Amount)
            my_dict[data[i].ExpenseName]=temp
        }
    }
    var label=[];
    var values=[];
    var my_bg=[];
    for(let key in my_dict)
    {
        label.push(key)
        values.push(my_dict[key])

        var r=Math.floor(Math.random() * 256);
        var g=Math.floor(Math.random() * 256);
        var b=Math.floor(Math.random() * 256);
        my_bg.push(`rgb(${r}, ${g}, ${b})`)
    }


    document.getElementById("admin_pie_back").style.display="flex";
    var ctx = document.getElementById('adminPieChart').getContext('2d');

    adminPieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: label,
        datasets: [{
          label: 'Expenses',
          data: values,
          backgroundColor: my_bg,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            labels:{
                color:"black",
                font:{
                        size:14
                    }
            }
          },
          tooltip: {
            enabled: true
          }
        }
      }
    });
    data={}
    size=0;
}
function admin_close_pie()
{
    document.getElementById("admin_pie_back").style.display="none"
    adminPieChart.destroy();
}
async function admin_view_exp()
{
    document.getElementById("admin_exp_back").style.display="flex";

    await fetch_insert_url()
    my_dict={}
    var total_amount=0
    for(let i=0;i<size;i++)
    {
        total_amount+=Number(data[i].Amount)
        if(!(data[i].ExpenseName in my_dict))
        {
            my_dict[data[i].ExpenseName]=data[i].Amount;
        }
        else{
            let temp=Number(my_dict[data[i].ExpenseName])
            temp+=Number(data[i].Amount)
            my_dict[data[i].ExpenseName]=temp
        }
    }
    for(key in my_dict)
    {
        var name=document.createElement("td");
        var amount=document.createElement("td");
        name.textContent=key;
        name.id="table"
        amount.textContent=my_dict[key];
        amount.id="table"
        var row=document.createElement("tr");
        row.append(name)
        row.append(amount)
        document.getElementById("admin_exp_table").append(row);
    }
}
function admin_close_exp()
{
    document.getElementById("admin_exp_back").style.display="none"
    let tab=document.getElementById("admin_exp_table")
    var row=tab.getElementsByTagName("tr");
    while(row.length>1)
    {
        tab.deleteRow(1)
    }
}
async function admin_view_pen()
{
    document.getElementById("admin_pen_back").style.display="flex";

    await fetch_insert_url()
    my_dict={}
    var total_amount=0
    for(let i=0;i<size;i++)
    {
        if(data[i].IsApproved=="Yes")
        {
        total_amount+=Number(data[i].Amount)
        if(!(data[i].ExpenseName in my_dict))
        {
            my_dict[data[i].ExpenseName]=data[i].Amount;
        }
        else{
            let temp=Number(my_dict[data[i].ExpenseName])
            temp+=Number(data[i].Amount)
            my_dict[data[i].ExpenseName]=temp
        }
        }
    }
    for(key in my_dict)
    {
        var name=document.createElement("td");
        var amount=document.createElement("td");
        name.textContent=key;
        name.id="table"
        amount.textContent=my_dict[key];
        amount.id="table"
        var row=document.createElement("tr");
        row.append(name)
        row.append(amount)
        document.getElementById("admin_pen_table").append(row);
    }
}
function admin_close_pen()
{
    document.getElementById("admin_pen_back").style.display="none"
    let tab=document.getElementById("admin_pen_table")
    var row=tab.getElementsByTagName("tr");
    while(row.length>1)
    {
        tab.deleteRow(1)
    }
}
var adminBarChart;
async function admin_view_bar()
{
    await fetch_insert_url()
    my_dict={}
    for(let i=0;i<size;i++)
    {
        if(!(data[i].ExpenseName in my_dict))
        {
            my_dict[data[i].ExpenseName]=data[i].Amount;
        }
        else{
            let temp=Number(my_dict[data[i].ExpenseName])
            temp+=Number(data[i].Amount)
            my_dict[data[i].ExpenseName]=temp
        }
    }
    var labels=[];
    var bar_data=[];
    var bg_color=[];
    var border_color=[];
    for(let key in my_dict)
    {
        labels.push(key);
        bar_data.push(my_dict[key])
        var r=Math.floor(Math.random() * 256);
        var g=Math.floor(Math.random() * 256);
        var b=Math.floor(Math.random() * 256);
        bg_color.push(`rgba(${r}, ${g}, ${b},0.2`)
        border_color.push(`rgba(${r}, ${g}, ${b},1`)
    }
  document.getElementById("admin_bar_back").style.display="flex";  
  const ctx = document.getElementById('adminBarChart').getContext('2d');
  adminBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels:labels,
      datasets: [{
        label: 'Expenses ($)',
        data: bar_data,
        backgroundColor:bg_color,
        borderColor:border_color,
        borderWidth: 1
      }]
    },
    options: {
        plugins: {
          legend: {
            display: true, 
            position: 'top',
            labels: {
              font: {
                size: 14,  
                family: 'Arial', 
                weight: 'bold'
              },
              color: 'rgb(0, 0, 0)' 
            }
          }
        },
        barPercentage:0.9,
      }
  });
}
function admin_close_bar()
{
    document.getElementById("admin_bar_back").style.display="none";
    adminBarChart.destroy();
}
async function print_admin_expense()
{
    await fetch_insert_url()
    var admin_one=document.createElement("div")
    admin_one.id="admin_one_exp"
    for(let i=0;i<size;i++)
    {
        var add=document.createElement('div')
        add.className="admin_added_exp"

        var name=document.createElement("div")
        name.id="userid"
        name.textContent=userID;

        var exp=document.createElement("div")
        exp.id="type_exp"
        exp.textContent=data[i].ExpenseName

        var approved=document.createElement("div")
        approved.id="approved"
        approved.textContent=data[i].IsApproved
        var checks=data[i].IsApproved

        var amount=document.createElement("div")
        amount.id="amount"
        amount.textContent=data[i].Amount
    
        var check=document.createElement("Div")
        check.id="check"

        if(checks=="Pending")
        {
            var tick=document.createElement("div")
            tick.className="tick"
            tick.textContent="\u2713"
            tick.addEventListener("click",accept)
            tick.id="ID"+i;

            var xmark=document.createElement("div")
            xmark.className="xmark"
            xmark.textContent="\u2717"
            xmark.addEventListener("click",reject)
            xmark.id="ID"+i;
        
            check.append(tick)
            check.append(xmark)
        }
        else
        {
            if(checks=="Yes")
            {
            check.textContent="Accepted"
            }
            else
            {
                check.textContent="Rejected"
            }
        }
        add.append(name)
        add.append(exp)
        add.append(approved)
        add.append(amount)
        add.append(check)
        if(checks=="Yes")
        {
            add.style.backgroundColor="#4CAF50"
        }
        else if(checks=="No")
        {
            add.style.backgroundColor="#F44336"
        }
        else
        {
            add.style.backgroundColor="#FFEB3B"
        }
        admin_one.append(add)
    }
    document.getElementById("admin_expenses").append(admin_one)
    data=""
    size=0
}
async function accept(event)
{
    var acc_id=event.target.id.slice(2,);
    var row_id;
    await fetch_insert_url();
    for(let i=0;i<size;i++)
    {
        if(acc_id==i)
        {
            row_id=data[i].ROWID;
            break;
        }
    }
    await fetch("/server/expense_tracker_function/update",{
        method:'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            ROWID:row_id,
            "IsApproved":"Yes"
        })
    })
    document.getElementById("admin_one_exp").remove();
    print_admin_expense();
    data=""
    size=0;
}
async function reject(event)
{
    var acc_id=event.target.id.slice(2,);
    var row_id;
    await fetch_insert_url();
    for(let i=0;i<size;i++)
    {
        if(acc_id==i)
        {
            row_id=data[i].ROWID;
            break;
        }
    }
    await fetch("/server/expense_tracker_function/update",{
        method:'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            ROWID:row_id,
            "IsApproved":"No"
        })
    })
    document.getElementById("admin_one_exp").remove()
    print_admin_expense()
    data=""
    size=0;
}
function profile_content()
{
    var pro=document.getElementById("profile")

    var pro_body=document.createElement("div")
    pro_body.id="pro_body"

    var fname=document.createElement("div")
    fname.id="pro_fname"
    fname.textContent="First Name : "+content.first_name;

    var lname=document.createElement("div")
    lname.id="pro_lname"
    lname.textContent="Last Name : "+content.last_name;
 
    var mail=document.createElement("div")
    mail.id="pro_mail"
    mail.textContent="Mail Id : "+content.email_id
    
    var zaaid=document.createElement("div")
    zaaid.id="pro_zaaid"
    zaaid.textContent="ZAAID : "+content.zaaid

    var zuid=document.createElement("div")
    zuid.id="pro_zaaid"
    zuid.textContent="ZUID : "+content.zuid

    var rname=document.createElement("div")
    rname.id="pro_rname"
    rname.textContent="Role Name : "+content.role_details.role_name

    var rid=document.createElement("div")
    rid.id="pro_rid"
    rid.textContent="Role Id : "+content.role_details.role_id  

    var orgid=document.createElement("div")
    orgid.id="pro_orgid"
    orgid.textContent="Org Id : "+content.org_id

    pro_body.append(fname)
    pro_body.append(lname)
    pro_body.append(mail)
    pro_body.append(zaaid)
    pro_body.append(zuid)
    pro_body.append(rname)
    pro_body.append(rid)
    pro_body.append(orgid)

    pro.append(pro_body)
}
function admin_profile_content()
{
    var pro=document.getElementById("admin_profile")

    var pro_body=document.createElement("div")
    pro_body.id="pro_body"

    var fname=document.createElement("div")
    fname.id="pro_fname"
    fname.textContent="First Name : "+content.first_name;

    var lname=document.createElement("div")
    lname.id="pro_lname"
    lname.textContent="Last Name : "+content.last_name;
 
    var mail=document.createElement("div")
    mail.id="pro_mail"
    mail.textContent="Mail Id : "+content.email_id
    
    var zaaid=document.createElement("div")
    zaaid.id="pro_zaaid"
    zaaid.textContent="ZAAID : "+content.zaaid

    var zuid=document.createElement("div")
    zuid.id="pro_zaaid"
    zuid.textContent="ZUID : "+content.zuid

    var rname=document.createElement("div")
    rname.id="pro_rname"
    rname.textContent="Role Name : "+content.role_details.role_name

    var rid=document.createElement("div")
    rid.id="pro_rid"
    rid.textContent="Role Id : "+content.role_details.role_id  

    var orgid=document.createElement("div")
    orgid.id="pro_orgid"
    orgid.textContent="Org Id : "+content.org_id

    pro_body.append(fname)
    pro_body.append(lname)
    pro_body.append(mail)
    pro_body.append(zaaid)
    pro_body.append(zuid)
    pro_body.append(rname)
    pro_body.append(rid)
    pro_body.append(orgid)

    pro.append(pro_body)
}
async function admin_anal_table()
{
    await fetch_insert_url()
    
    for(let i=0;i<size;i++)
    {
        var name=document.createElement("td");
        var amount=document.createElement("td");
        var creator=document.createElement("td");

        creator.textContent=data[i].CREATORID
        name.textContent=data[i].ExpenseName;
        amount.textContent=data[i].Amount;

        var row=document.createElement("tr");
        row.id="anal_body"

        row.append(creator)
        row.append(name)
        row.append(amount)

        document.getElementById("admin_anal_table").append(row);
    }
    data={}
    size=0;
}
function analyze()
{
    let tab=document.getElementById("admin_anal_table")
    var row=tab.getElementsByTagName("tr");
    while(row.length>1)
    {
        tab.deleteRow(1)
    }

    var option_exp=document.getElementById("exp_select").value
    var option_user=document.getElementById("user_select").value
    
    if(option_exp=="allexpense" && option_user=="alluser")
    {
        admin_anal_table();
    }
    else
    {
        changed_admin_anal_table(option_exp,option_user);
    }
}
async function changed_admin_anal_table(option_exp,option_user)
{
    await fetch_insert_url()
    if(option_exp=="allexpense" || option_user=="alluser")
    {
        if(option_exp=="allexpense")
        {
            for(let i=0;i<size;i++)
            {
                if(option_user!=data[i].CREATORID)
                {
                    continue
                }
                var name=document.createElement("td");
                var amount=document.createElement("td");
                var creator=document.createElement("td");

                creator.textContent=data[i].CREATORID
                name.textContent=data[i].ExpenseName;
                amount.textContent=data[i].Amount;

                var row=document.createElement("tr");
                row.id="anal_body"

                row.append(creator)
                row.append(name)
                row.append(amount)

                document.getElementById("admin_anal_table").append(row);
            }
        }
        else
        {
            for(let i=0;i<size;i++)
            {
                if(option_exp!=data[i].ExpenseName)
                {
                    continue
                }
                var name=document.createElement("td");
                var amount=document.createElement("td");
                var creator=document.createElement("td");

                creator.textContent=data[i].CREATORID
                name.textContent=data[i].ExpenseName;
                amount.textContent=data[i].Amount;
    
                var row=document.createElement("tr");
                row.id="anal_body"
    
                row.append(creator)
                row.append(name)
                row.append(amount)
    
                document.getElementById("admin_anal_table").append(row);
                }
        }
    }
    else
    {
        for(let i=0;i<size;i++)
        {
            if(option_exp!=data[i].ExpenseName || option_user!=data[i].CREATORID)
            {
                continue;
            }
            var name=document.createElement("td");
            var amount=document.createElement("td");
            var creator=document.createElement("td");

            creator.textContent=data[i].CREATORID
            name.textContent=data[i].ExpenseName;
            amount.textContent=data[i].Amount;

            var row=document.createElement("tr");
            row.id="anal_body"

            row.append(creator)
            row.append(name)
            row.append(amount)

            document.getElementById("admin_anal_table").append(row);
        }
    }
    data={}
    size=0;
}

    