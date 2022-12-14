// Ambil element
const skills_holder = document.getElementById('skills');


// ES5
    //const user_logged = "Tony";
    //user_place.innerHTML = "Hi, " + user_logged + " Apa kabar?";
    /*
    function addProduct(name, category){
        return {
            name: name,
            category: category
        }
    }

    var getProduct =  addProduct("iPhone11", "Gadget");
    console.log(getProduct);*/

// ES6
    //const user_logged = "Tony";
    //user_place.innerHTML = `Hai, ${user_logged}. Apa kabar?`;
    /*
    function addProduct(name, category){
        return {
            name,
            category
        }
    }

    var getProduct =  addProduct("iPhone11", "Gadget");
    cart_items.innerHTML = `Product No. 1 : ${getProduct.name} Category : ${getProduct.category}`;
    */

    const yourSkills = ['UX Design', 'Web Development', 'Video Editor'];
    
    // tambahkan item pada array
    yourSkills.push('DevOps');

    let parent = '<ul>';

    yourSkills.forEach((skill) => {
        parent += '<li>' + skill + '</li>';
        console.log(`${skill}`);
    });

    parent += '</ul>';
    skills_holder.innerHTML = parent;