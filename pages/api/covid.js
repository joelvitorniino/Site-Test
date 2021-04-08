async function Covid(request, response) {
    const covid1 = await fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/rj');
    const covidJSON = await covid1.json();
    const cases = covidJSON.cases;

    response.json({
        cases: cases
    });
};

export default Covid;