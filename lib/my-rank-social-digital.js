'use babel';

import MyRankSocialDigitalView from './my-rank-social-digital-view';
import { CompositeDisposable } from 'atom';

export default {

  MyRankSocialDigitalView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.MyRankSocialDigitalView = new MyRankSocialDigitalView(state.MyRankSocialDigitalViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.MyRankSocialDigitalView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'my-rank-social-digital:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.MyRankSocialDigitalView.destroy();
  },

  serialize() {
    return {
      MyRankSocialDigitalViewState: this.MyRankSocialDigitalView.serialize()
    };
  },

  toggle() {
    /*console.log('MyPackageAtom was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );*/
    let editor
    if (editor = atom.workspace.getActiveTextEditor()) {
      let selection = editor.getSelectedText()
      let reversed = selection.split('').reverse().join('')
      editor.insertText(reversed)
    }
  },
  fetch() {
    /*console.log('MyPackageAtom was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );*/
    let editor
    if (editor = atom.workspace.getActiveTextEditor()) {
      let selection = editor.getSelectedText()
      let reversed = selection.split('').reverse().join('-')
      editor.insertText(reversed)
    }
  }

};
