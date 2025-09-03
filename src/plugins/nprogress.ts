import { debounce } from 'lodash-es'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false, trickleSpeed: 300 })

const done = debounce(NProgress.done, 300, {
  leading: false,
  trailing: true,
})

export function NProgressCustom() {
  return {
    start: NProgress.start,
    done,
  }
}
