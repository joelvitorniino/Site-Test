async function Covid(request, response) {
    const covid1 = await fetch('https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/rj');
    const covidJSON = await covid1.json();
    const cases = covidJSON.cases;
    const deaths = covidJSON.deaths;
    const dynamicDate = new Date();
    const headers = new Headers();

    headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  headers.append('Access-Control-Allow-Origin', 'http://192.168.42.208:5500/index.html');
  headers.append('Access-Control-Allow-Credentials', 'true');

  headers.append('GET', 'POST', 'OPTIONS');

    response.json({
        date: dynamicDate.toGMTString(),
        cases: cases,
        deaths: deaths
    });
};

export default Covid;