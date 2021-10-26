const AllProductsDiv = document.querySelector(".AllProductsDiv") //הדיב של כל המוצרים
const AddProductBtn = document.querySelector(".AddProduct") //  כפתור הוספת המוצרים
const Pname = document.querySelector('#Pname') //האינפוט שמכיל את שם המוצר
const Pprice = document.querySelector('#Pprice') //האינפוט שמכיל את מחיר המוצר
const Pcatagory = document.querySelector('#Pcatagory') //האינפוט שמכיל את קטגוריית המוצר
const Ppic = document.querySelector('#Ppic') //האינפוט שמכיל את תמונת המוצר
Pcatagory.value = "" //נתחיל עם זה שלא יופיע קטגוריה בבחירת המוצר כך שהמשתמש יחלץ ואז יראה מהן הקטגרויות

//----יצירת אובייקט מערך מוצרים----
let Parr = [];

//לחיצת הכפתור דרכו מוסיפים מוצרים
AddProductBtn.addEventListener('click', function (e) {
    //קודם נבדוק שלא השאירו שדות ריקים
    if (Pname.value == "" || Pprice.value == "" || Pcatagory.value == "" || Ppic.value == "") {
        alert("יש למלא את כל השדות")

    } else if (!Ppic.value.startsWith("http")) {
        alert("כתובת תמונה שגויה")
    } else {

        const ProductDiv = document.createElement('div') //יצירת דיב לכל מוצר
        const ProductName = document.createElement('h2') //   שם המוצר
        const ProductPrice = document.createElement('h3') //   מחיר המוצר
        const ProductPic = document.createElement('img') //   תמונת המוצר
        const ProductCat = document.createElement('h4') //   קטגוריית המוצר

        ProductDiv.className = "ProductDiv"

        //יצירת כפתור מחיקה--------------------------
        const delbtn = document.createElement('button')
        delbtn.textContent = "Remove Product"
        delbtn.className = "delbtn"
        delbtn.addEventListener('click', function (ev) {
            //-------מחיקה מהמערך----
            let PD = ev.target.parentElement.querySelector("h2").textContent
            for (let i = 0; i < Parr.length; i++) {

                if (Parr[i].ProName == PD) {
                    Parr.splice(i, 1)
                }

            }
            //-----מחיקה מהתצוגה-----
            ev.target.parentElement.remove()
        })
        //----------------------------------------
        //------------הכנסת נתונים ואימוץ--------------

        ProductName.textContent = Pname.value
        ProductPrice.textContent = Pprice.value + "$"
        ProductCat.textContent = "Catagory: " + Pcatagory.value
        ProductPic.src = Ppic.value

        ProductDiv.appendChild(ProductPic)
        ProductDiv.appendChild(ProductName)
        ProductDiv.appendChild(ProductPrice)
        ProductDiv.appendChild(ProductCat)
        ProductDiv.appendChild(delbtn)

        AllProductsDiv.appendChild(ProductDiv)

        //---הוספה למערך-----
        Parr.push({
            ProName: Pname.value,
            ProPrice: Pprice.value,
            ProCat: Pcatagory.value,
            Pimg: Ppic.value
        })
        console.log(Parr);
        //--------------------

        //-------איפוס הטופס------------------
        Pname.value = ""
        Pprice.value = ""
        Pcatagory.value = ""
        Ppic.value = ""
    }
})