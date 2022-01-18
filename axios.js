const element = document.getElementById('updatedate');
element.innerHTML = "COVID";
const getdata = () => {
    axios.get('https://covid19.ddc.moph.go.th/api/Cases/today-cases-all').then(response => {
    // console.log(response.data[0].new_case);
    
    });
};
