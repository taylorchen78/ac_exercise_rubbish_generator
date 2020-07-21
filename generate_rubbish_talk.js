const target = {
  engineer: '工程師',
  designer: '設計師',
  entrepreneur: '創業家'
}

const task = {
  engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
}

const phrase = ['很簡單', '很容易', '很快', '很正常']

function generateRubbishTalk(type) {
  if (type) {
    const randomTaskIndex = Math.floor(Math.random() * task[type].length)
    const randomPhraseIndex = Math.floor(Math.random() * phrase.length)
    return `身為一個${target[type]}，${task[type][randomTaskIndex]}，${phrase[randomPhraseIndex]}吧！`
  } else {
    return "選一個職業!"
  }
}

// export generateRubbishTalk function for other files to use
module.exports = generateRubbishTalk