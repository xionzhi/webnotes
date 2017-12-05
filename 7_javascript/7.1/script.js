function user(name) {
    var sex, age;
    return {
        // name
        getName: function() {
            return name;
        },
        setName: function(newName) {
           name = newName;
        },
        // sex
        getSex:function() {
            return sex;
        },
        setSex: function(newSex) {
            sex = newSex;
        },
        // age
        getAge:function() {
            return age;
        },
        setAge: function(newAge) {
            age = newAge;
        }
    }
}

var xz = user("xionzhi");
xz.setSex("nan");
xz.setAge(20);

var name = xz.getName();
var sex = xz.getSex();
var age = xz.getAge();

console.log(name, sex, age);