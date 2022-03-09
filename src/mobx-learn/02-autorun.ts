import { watcher } from "./index"

function autorun(fn: Function) {
    console.log(watcher = null)
    fn()
}