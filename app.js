let mobiles = [
    {
        iphone: {
            v14pro: {
                Ram: "4GB",
                Rom: "64GB",
                Price: "140,000",
                Detail: {
                    Processor: "Octa Core",
                    Camera: "30MP",
                    Battery: "5000 mAh",
                },
            },
            v13: {
                Ram: "3GB",
                Rom: "64GB",
                Price: "120,000",
                Detail: {
                    Processor: "Dual Core",
                    Camera: "20MP",
                    Battery: "4000 mAh",
                },
            },
            v12: {
                Ram: "3GB",
                Rom: "32GB",
                Price: "100,000",
                Detail: {
                    Processor: "i Core",
                    Camera: "10MP",
                    Battery: "3000 mAh",
                },
            },
        },

    },

    {
        samsung: {
            s14: {
                Ram: "8GB",
                Rom: "64GB",
                Price: "100,000",
                Detail: {
                    Processor: "Octa Core",
                    Camera: "30MP",
                    Battery: "5000 mAh",
                },
            },
            s13: {
                Ram: "6GB",
                Rom: "64GB",
                Price: "90,000",
                Detail: {
                    Processor: "Dual Core",
                    Camera: "20MP",
                    Battery: "4000 mAh",
                },
            },
            s12: {
                Ram: "4GB",
                Rom: "64GB",
                Price: "80,000",
                Detail: {
                    Processor: "i Core",
                    Camera: "10MP",
                    Battery: "3000 mAh",
                },
            },
            s11: {
                Ram: "4GB",
                Rom: "32GB",
                Price: "70,000",
                Detail: {
                    Processor: "Octa Core",
                    Camera: "30MP",
                    Battery: "5000 mAh",
                },
            },
        },
    },
    {
        Xiomi: {
            x14: {
                Ram: "6GB",
                Rom: "64GB",
                Price: "70,000",
                Detail: {
                    Processor: "Octa Core",
                    Camera: "30MP",
                    Battery: "5000 mAh",
                },
            },
            x13: {
                Ram: "6GB",
                Rom: "32GB",
                Price: "60,000",
                Detail: {
                    Processor: "Octa Core",
                    Camera: "30MP",
                    Battery: "5000 mAh",
                },
            },
            x12: {
                Ram: "4GB",
                Rom: "32GB",
                Price: "50,000",
                Detail: {
                    Processor: "Octa Core",
                    Camera: "30MP",
                    Battery: "5000 mAh",
                },
            },
        },
    },
];

// function Display name of device using map() function
let mobileToShow = "";
functionToDisplay("mobileName");
function functionToDisplay(idMobileName) {
    mobiles.map(function (e) {
        mobileNametoDiplay = Object.keys(e)[0];
        mobileToShow += `<option value="${mobileNametoDiplay}"> ${mobileNametoDiplay} </Option>`;
    });
    document.getElementById(idMobileName).innerHTML = mobileToShow;
}

// function Display with the halp of Onchange showing modalName using map() Method
function functionClickTo() {
    let mobileModel = "";
    let mobileBrand = document.getElementById("mobileName").value;
    mobiles.map(function (e) {
        if (Object.keys(e)[0] == mobileBrand) {
            let mobileModeltoDiplay = Object.keys(e[mobileBrand]);
            mobileModeltoDiplay.map((val) => {
                mobileModel += `<option value="${val}"> ${val} </Option>`;
            });
            document.getElementById("mobileModel").innerHTML = mobileModel;
        }
    });
}


// Search function using filter() Method for showing Others Features
function onValue() {
    mobiles.filter(function (e) {
        console.log("DATA",Object.keys(e)[0],mobileName)
        if (Object.keys(e)[0] == mobileName.value) {
            let mobileName = document.getElementById('mobileName')
            let mobileModel = document.getElementById('mobileModel')
            let resultToDisplayName = Object.keys(e[mobileName.value][mobileModel.value])
            let resultToDisplayModel = Object.values(e[mobileName.value][mobileModel.value])
            document.getElementById("demo").innerHTML = resultToDisplayName[0];
            document.getElementById("demo1").innerHTML = resultToDisplayModel[0];
            document.getElementById("demo2").innerHTML = resultToDisplayName[1];
            document.getElementById("demo3").innerHTML = resultToDisplayModel[1];
            document.getElementById("demo4").innerHTML = resultToDisplayName[2];
            document.getElementById("demo5").innerHTML = resultToDisplayModel[2];
            document.getElementById("demo6").innerHTML = resultToDisplayName[3];
            document.getElementById("demo7").innerHTML = resultToDisplayModel[3].Processor;
            document.getElementById("demo8").innerHTML = resultToDisplayModel[3].Camera;
            document.getElementById("demo9").innerHTML = resultToDisplayModel[3].Battery;
        }
    }
    )
};

// Callback function for diplay by defoult modelName's
functionClickTo()


// practice of class 4 Date 06-09-2022

// let a = [
    //     {
        //         id: 1,
        //         name: "abc",
        //         category: "A",
        //         isApproved: false
//     },
//     {
//         id: 3,
//         name: "efg",
//         category: "B",
//         isApproved: false
//     },
//     {
//         id: 4,
//         name: "ijk",
//         category: "B",
//         isApproved: true
//     },
//     {
//         id: 5,
//         name: "mno",
//         category: "A",
//         isApproved: false
//     }
// ];

// =========== Map() ==============

// Applying Arrays Callback Funtion Map() for all Index Value
// a.map(function(e){
//     console.log(e)
// })

// Applying Arrays Callback Funtion Map() for Id Index Only
// a.map(function(e){
//     console.log(e.id)
// })

// Applying Arrays Callback Funtion Map() for name Index Only
// a.map(function(e){
//     console.log(e.name)
// })

// Return Array function
// let b = a.map(function(e){
//     console.log(e)
//     return e;
// })

// =============== filter() ===================

// Filter is only user for filtration
// let b = a.filter(function(e, i){
//     if (e.category == "A") {
//         e.index = i;
//         return e;
//     }
// });
// console.log(b);

// ============== forEach() ================

// this array function is not return by default and it will insert new value to every each Object in array

// a.forEach(function(x, i) {
//     x.instWithforEach = "Shehbaz";
// });

// console.log(a);

// for delete in forEach()

// a.forEach(function(x, i) {
//     x.delete = "Shehbaz";
// });

// console.log(a);

// ================ some() ====================

// let b = a.some(function(e, i){
//          if ( e.category == "A") {
//             return e;
//          }
// });

// console.log(b);

// let b = a.some(function(e, i){
//          if (e.isApproved) {
//             return e;
//          }
// });

// console.log(b);

// ================ find() ====================

// find() Method will return single unique object

// let b = a.find(function(e, i){
//     if(e.id == 2){
//         return e;
//     }
// })
// console.log(b);
// ================ findIndex ====================

// ================ arrow function ==================

// ================= higher order function ==================
