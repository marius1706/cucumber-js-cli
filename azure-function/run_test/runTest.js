const {Cli} = require('cucumber');

async function runCucTest(testId) {

    let runArgs = ['node', 'cucumber-js'].concat(['--tags', '@tid:' + testId]);

    const cli = new Cli({argv: runArgs, cwd: process.cwd(), stdout: process.stdout});

    try {
        let resultOfTest = await cli.run();
        console.log("Result of running tests: " + JSON.stringify(resultOfTest));

    } catch (e) {
        console.log("Running tests were failed: " + e.stack);
    }
}

async function runTest() {
    let testIds = ["111111", "222222"];

    for (let i = 0; i < testIds.length; i++) {
        await runCucTest(testIds[i]);
    }
}

runTest();


