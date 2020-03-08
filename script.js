let cpu_amd = document.querySelector('#cpu_amd');
let cpu_intel = document.querySelector('#cpu_intel');
let label_intel = document.querySelector("#label_intel");
let next_cpu_intel = document.querySelector("#next_cpu_intel");
let next_cpu_amd = document.querySelector("#next_cpu_amd");
let mother = document.querySelector("#mother");
let ram = document.querySelector("#ram");
let hdd = document.querySelector("#hdd");
let ssd_yes = document.querySelector("#ssd_yes");
let ssd_no = document.querySelector("#ssd_no");
let monitor = document.querySelector("#monitor");
let myszka = document.querySelector("#myszka");
let klawiatura = document.querySelector("#klawiatura");
let system = document.querySelector("#system");
let colors = document.querySelector("#colors");
let delivery = document.querySelector("#delivery");
let comments = document.querySelector("#comments");
let procki;
ssd_yes.value = 0;
let procki_intel;
let procki_amd;
let external_text = "";
let zestaw = document.querySelector("#zestaw");


let p_cpu = document.querySelector("#p_cpu");
let p_mother = document.querySelector("#p_mother");
let p_ram = document.querySelector("#p_ram");
let p_hdd = document.querySelector("#p_hdd");
let p_ssd = document.querySelector("#p_ssd");
let p_external = document.querySelector("#p_external");
let p_colors = document.querySelector("#p_colors");
let p_data = document.querySelector("#p_data");
let p_comments = document.querySelector("#p_comments");


document.querySelector("#intel").style.display = "none";
document.querySelector("#amd").style.display = "none";


cpu_amd.addEventListener('click', function() {
    document.querySelector("#intel").style.display = "none";
    document.querySelector("#amd").style.display = "inline";
    procki = 1;

})
cpu_intel.addEventListener('click', function() {
    document.querySelector("#amd").style.display = "none";
    document.querySelector("#intel").style.display = "inline";
    procki = 2;

})
ssd_no.addEventListener("click", function() {
    ssd_no.value == 1
})

ssd_yes.addEventListener("click", function() {
    ssd_yes.value == 1
})

ssd_yes.value == 0 ? ssd_text = "nie" : ssd_text = "tak";


monitor.addEventListener('click', function() {
    external_text = "monitor "
})
myszka.addEventListener('click', function() {
    external_text += " myszka  "
})
klawiatura.addEventListener('click', function() {
    external_text += " klawiatura  "
})
system.addEventListener('click', function() {
    external_text += " system  "
})

function konfiguracja() {
    document.querySelector(".xd").style.display = "block";
    switch (next_cpu_intel.value) {
        case "0":
            procki_intel = "Intel Pentium";
            break;
        case "1":
            procki_intel = "Intel Core i3"
            break;
        case "2":
            procki_intel = "Intel Core i5"
            break;
        case "3":
            procki_intel = "Intel Core i5"
            break;
        case "4":
            procki_intel = "Intel Core i7"
            break;
        case "5":
            procki_intel = "Intel Core i9"
            break;
        default:
            procki_intel = "Nie wybrano"
            break;


    }
    switch (next_cpu_amd.value) {
        case "0":
            procki_amd = "AMD Ryzen 3";
            break;
        case "1":
            procki_amd = "AMD Ryzen 5"
            break;
        case "2":
            procki_amd = "AMD Ryzen 9"
            break;
        default:
            procki_amd = "Nie wybrano"
            break;


    }
    switch (mother.value) {
        case '0':
            mother_text = 'Firmy A; 4 sloty RAM; obsługa dysków m.2';
            break;
        case '1':
            mother_text = 'Firmy B; 6 slotów RAM; obsługa portu USB C';
            break;
        case '2':
            mother_text = 'Firmy C; 8 slotów RAM; dwa gniazda CPU';
            break;
        default:
            mother_text = 'nie wybrano';
            break;
    }
    switch (ram.value) {
        case '0':
            ram_text = '4 GB';
            break;
        case '1':
            ram_text = '8 GB';
            break;
        case '2':
            ram_text = '16 GB';
            break;

        default:
            ram_text = 'nie wybrano';
            break;
    }
    switch (hdd.value) {
        case '0':
            hdd_text = '256 GB';
            break;
        case '1':
            hdd_text = ' 1 TB';
            break;
        case '2':
            hdd_text = '2 TB';
            break;

        default:
            hdd_text = 'nie wybrano';
            break;
    }
    kolor = colors.value;
    zestaw.style.display = "flex";
    p1 = document.createElement("p");
    if (procki == 1) {
        pcpu = document.createTextNode(procki_amd)
    } else {
        pcpu = document.createTextNode(procki_intel)
    }
    p1.appendChild(pcpu);
    p_cpu.appendChild(p1);


    p2 = document.createElement("p");
    pmother = document.createTextNode(mother_text)
    p2.appendChild(pmother);
    p_mother.appendChild(p2);

    p3 = document.createElement("p");
    pram = document.createTextNode(ram_text)
    p3.appendChild(pram);
    p_ram.appendChild(p3);


    p4 = document.createElement("p");
    phdd = document.createTextNode(hdd_text)
    p4.appendChild(phdd);
    p_hdd.appendChild(p4);

    p5 = document.createElement("p");
    pssd = document.createTextNode(ssd_text)
    p5.appendChild(pssd);
    p_ssd.appendChild(p5);

    p6 = document.createElement("p");
    pexternal = document.createTextNode(external_text)
    p6.appendChild(pexternal);
    p_external.appendChild(p6);

    p7 = document.createElement("p");
    pcolors = document.createTextNode(kolor);
    p7.appendChild(pcolors);
    p_colors.appendChild(p7);
    document.querySelector("#f2").style.border = "7px solid" + kolor;



    p8 = document.createElement("p");
    pdata = document.createTextNode(delivery.value);
    p8.appendChild(pdata);
    p_data.appendChild(p8);

    p9 = document.createElement("p");
    pcomments = document.createTextNode(comments.value);
    p9.appendChild(pcomments);
    p_comments.appendChild(p9);

}
let resecik = document.querySelector("#reset");
resecik.addEventListener("click", function() {
    window.location.reload();
    localStorage.clear();
    ssd_yes.value = 0;
    ssd_no.value = 0;
});
document.querySelector(".xd").style.display = "none";