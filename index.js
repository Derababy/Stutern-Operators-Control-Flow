//Number 3
let GeneralSubjects = "English, Mathematics";
let ScienceClass =  "Physics, Chemistry, Biology, Technical Drawing";
let SocialScienceClass = "Accounting, Commerce, Marketing, Geography";
let ArtClass = "Government, Economics, Literature, History";
 
let Classgroup = ArtClass

if (Classgroup == ScienceClass) {
    console.log("The subjects for Science Class are: " + ScienceClass + ', ' + GeneralSubjects)
} else if (Classgroup == SocialScienceClass) {
    console.log("The subjects for Social Science Class are: " + SocialScienceClass + ', ' + GeneralSubjects)
} else if (Classgroup == ArtClass) {
    console.log("The subjects for Art Class are: " + ArtClass + ', ' + GeneralSubjects)
}
else {
    console.log(GeneralSubjects)
}


//Number 5
    function nearestPowerOf2(num) {
    let pwr = 1;
    while (pwr <= num) {
        pwr *= 2;
    }
        pwr /= 2; {
            return pwr
        }
    }

    let num = 20;
    let pwr = nearestPowerOf2(num);
    console.log("The number " + pwr + " is the power of 2 nearest to " + num)

    