import { Plugin } from '@ckeditor/ckeditor5-core/src'
import { ButtonView } from '@ckeditor/ckeditor5-ui/src'
import ImageFullBig from '../theme/icons/fullscreen-big.svg'
import ImageFullCancel from '../theme/icons/fullscreen-cancel.svg'
import '../theme/style.css'
import { removeClass, toggleClass } from './utils'

function toggle (el) {
  toggleClass(el, 'ck-fullscreen')
  toggleClass(document.body, 'ck-fullscreen-overlay')
}
export default class Fullscreen extends Plugin {
  init () {
    const editor = this.editor
    const t = editor.t

    editor.ui.componentFactory.add('fullscreen', (locale) => {
      const view = new ButtonView(locale)
      let etat = 0
      view.set({
        label: t('Fullscreen'),
        icon: ImageFullBig,
        tooltip: true
      })

      const className = this.editor.config.get('fullscreenConfig')?.className
      const ele = document.getElementsByClassName(
        className || 'document-editor'
      )[0]

      view.on('execute', () => {
        if (etat === 1) {
          toggle(ele)
          view.set({
            label: t('Fullscreen'),
            icon: ImageFullBig,
            tooltip: true
          })
          etat = 0
        } else {
          toggle(ele)
          view.set({
            label: t('Fullscreen cancel'),
            icon: ImageFullCancel,
            tooltip: true
          })
          etat = 1
        }
      })
      return view
    })

    editor.on('destroy', () => {
      removeClass(document.body, 'ck-fullscreen-overlay')
    })
  }
}
