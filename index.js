// task 2
// exercice 1//
const persons = [ 
    { name : "MONCEF" , age: 13} , 
    { name : "BAHIJA" , age: 23} , 
    { name : "ALA" , age: 18} , 
]; 
function mineurMajeur() {
    persons.map(test)
    return persons
}
function test(person) {
    if(person.age > 18) {
        person.status =  "majeur"
    }else{
        person.status = "mineur"
    }
}
console.log(mineurMajeur())
//exercice 2 //
const str1 = 'ahmed&ferah-moez&saadi-fadhel&gadihi'; 
 function FormatToArray(str1){
    let  array = str1.split("-")
    let final = array.map(current => {

        let fL = current.split("&")
        return { firstName : fL[0] , mastName : fL[1]}
    }
    )
    console.log(final)

}
console.log(FormatToArray(str1))
//exercice 3
const users = [ 
    { name : "sarah" , comment : "j'aime ce poste <3" },
     { name : "monya" , comment : "le poste est null :( " }, 
     { name : "carlos" , comment : "salut l'algérie" } ] 
function MoodDetect(){
    users.forEach(function(element){
        if(element.comment.includes("<3")){
            delete element.comment;
            element.etat = " heureux"
        }else if(element.comment.includes(":(")){
            delete element.comment;
            element.etat = "triste"
        }else{
            delete element.comment;
            element.etat = "neutre"
            
        }
    });
    return users 
}
console.log(MoodDetect())
// exercice 4
const etudiants = [ 
    { name : "sarah" , note : undefined }, 
    { name : "monya" , note : 7 }, //a
    { name : "carlos" , note : 13 }, //b
    { name : "fadhel" , note : 18 }, 
] 
function  FailedStudent(){
    const filtredList = etudiants.filter( etudiant =>  typeof etudiant.note  == "number");
    filtredList.sort((a,b)=>{
        return b.note - a.note 
    });
    let total = filtredList.reduce((acc, current) => {
        return acc + current.note;
    }, 0);
    let moy = total/filtredList.length;
    filtredList.forEach((element)=> {
        if(element.note > moy) {
            element.mention = "bien"
        }else {
            element.mention = "passable"
        }
    })
    return filtredList

}
console.log(FailedStudent());
