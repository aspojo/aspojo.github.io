import {Octokit} from "https://cdn.skypack.dev/octokit";

const auth = "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";
const owner = 'aspojo';
const repo = "aspojo.github.io";

const octokit = new Octokit({auth})
let path;
let file_sha;
let user;

async function getMyConfig(_user) {
    user = _user;
    await refreshSha();
    console.log("file_sha", file_sha);
    const fileContent = await octokit.request('GET /repos/{owner}/{repo}/git/blobs/{file_sha}', {
        owner,
        repo,
        file_sha
    })
    console.log("fileContent", fileContent);
    const rowFileContent = atob(fileContent.data.content);
    console.log("rowFileContent", rowFileContent);
    return JSON.parse(rowFileContent);
}

async function createMyConfig(json) {
    await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
        owner,
        repo,
        path,
        message: "add new user" + user,
        committer: {
            name: 'aspojo',
            email: 'logbug@aliyun.com'
        },
        content: btoa(JSON.stringify(json))
    });
    refreshSha();
}


async function saveMyConfig(json, msg) {
    await refreshSha();
    await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
        owner,
        repo,
        path,
        sha: file_sha,
        message: msg,
        committer: {
            name: 'aspojo',
            email: 'logbug@aliyun.com'
        },
        content: btoa(JSON.stringify(json))
    })
}

async function refreshSha() {
    path = "words-root/" + user + ".json";
    try {
        let obj = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {owner, repo, path})
        console.log("ref", obj);
        file_sha = obj.data.sha
    } catch (e) {
        if (e.response.data.message === "Not Found") {
           await createMyConfig({});
        }
    }

}

window.getMyConfig = getMyConfig;
window.saveMyConfig = saveMyConfig;
