const assert = require('assert');

(async function () {
    // GET example
    const {statusCode} = await $got.get('https://instana-syn-mon-git-tetsuya-kawano-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/samples/hello');
    assert.equal(statusCode, 200, 'Expected a 200 Status Code, current is ' + statusCode);

// POST example
    var postOptions = {
      url: 'https://instana-syn-mon-git-tetsuya-kawano-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/samples/hello',
      json: {
        'name': 'Instanauts',
      },
      https:{ rejectUnauthorized: false },
      headers:{'accept': 'application/json'}
    };

    let postResponse = await $got.post(postOptions);
    assert.ok(postResponse.statusCode == 200, 'POST status is ' + postResponse.statusCode + ', it should be 200');

    const jsonBody = JSON.parse(postResponse.body);
    console.log('=========jsonBody=========')
    console.log(jsonBody)
    assert.equal(jsonBody.restext, 'hello, Instanauts!', 'Expected TestName');

})();
