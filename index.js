#!/usr/bin/env node

const shell = require("shelljs")
const cac = require("cac")
const cli = cac()
const path = require("path")

const blogPath = `/Users/johnlindquist/projects/johnlindquist.com`
const git = require("simple-git/promise")

const createEmbed = (project, branch) =>
  `http://codesandbox.io/embed/github/johnlindquist/${project}/tree/${branch}`

cli.command("").action(async () => {
  const status = await git().status()
  const project = path.basename(process.cwd())
  const branch = status.current
  const url = createEmbed(project, branch)
  shell.exec(`open -a "Google Chrome" ${url}`)
})

cli.parse()
