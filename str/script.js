// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "spatialstrooptask",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "SpatialStroopTask",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.canvas.Screen",
      "content": [],
      "viewport": [
        800,
        600
      ],
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
const userAgentInfo = this.state.meta.userAgent;
const platformInfo = this.state.meta.platform;

let isMobile;

if(platformInfo =='iPhone' || platformInfo =='iPad' || userAgentInfo.indexOf('android') > 0){
  isMobile = true;
}
else{
  isMobile = false;
}

this.state.isMobile = isMobile;
}
      },
      "title": "Check User Environment",
      "tardy": true,
      "timeout": "200"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Ch2\u003E研究説明書\u003C\u002Fh2\u003E\n\n\u003Cp\u003E以下の説明をお読みいただき，本研究へご協力いただける方は研究参加への同意にチェックマークを入れてお進みください。本研究はフルスクリーンモードで行います。研究への参加を途中で中止される場合はEscキーでフルスクリーンモードを解除してブラウザを閉じるようにしてください。\u003C\u002Fp\u003E\n\n\u003Ch3\u003E①研究の目的\u003C\u002Fh3\u003E\n  \u003Cp\u003E人に2つの異なる情報を与え，片方の情報に基づいて判断することを求めると，もう片方の情報が判断に影響することが知られています。この影響の強さは個人によって異なることが知られており，本研究では，この個人差を調べるより良い方法を開発することを目的としています。\u003C\u002Fp\u003E\n\n  \u003Ch3\u003E②研究の方法\u003C\u002Fh3\u003E\n  \u003Cp\u003E この研究では，Webブラウザ上で（1）画面の表示に従ってキーを押す課題，および（2）簡単なアンケートに取り組んでいただきます。個人によって異なりますが所要時間は10分から15分程度です。\n\n  \u003Ch3\u003E③研究に伴う危険性及び不利益について\u003C\u002Fh3\u003E\n  \u003Cp\u003Eキー押し課題では，モニターを見続けることで目の疲れや肩こりなどの一時的な疲労やストレスを感じる可能性がありますが，身体や精神に長く続く影響が生じる心配はありません。また，万が一負担や不快感などを感じる場合は，あなたの意思で研究への参加をいつでも中止することができます。中止に伴う不利益は一切生じませんが，中止した場合には謝礼をお支払いすることはできません。\n\n  \u003Ch3\u003E④研究結果の使われ方\u003C\u002Fh3\u003E\n  \u003Cp\u003E研究で得られたデータは，学術論文や学会発表等の学術目的，および，大学等で用いられる教科書において教育目的として利用される可能性があります。また，本研究は研究の透明性を高める観点から研究で取得したデータを研究データ公開用のページ（https:\u002F\u002Fosf.io\u002F 等）で公開します。このデータは研究参加者にランダムなIDを付与した上で公開しますので，あなた個人を特定する情報が公になることは一切ありません。\n\n  \u003Ch3\u003E⑤個人情報とデータの取り扱い\u003C\u002Fh3\u003E\n  \u003Cp\u003Eキー押しの課題やアンケート調査における回答データのほかにアクセスしているブラウザの種類や画面の解像度等の情報が記録されますが，データは全て匿名で扱われます。研究データは本研究の関係者以外がアクセスできないサーバー上に保管されます。研究期間終了後，5年間保管された後に破棄されます。データ公開用ページで公開するデータについては，5年目以降も公開を続けるものとします。\u003C\u002Fp\u003E\n\n  \u003Ch3\u003E⑥研究協力の自由及び同意の撤回について\u003C\u002Fh3\u003E\n  \u003Cp\u003E研究へ参加するかどうかはあなたの自由な意思で決めることができ，研究への参加は強制されるものではありません。研究へ参加しないことによってあなたが不利益をこうむることは一切ありません。データは匿名で記録される関係で，研究終了後は同意を撤回できないことをご了承ください。\u003C\u002Fp\u003E\n\n  \u003Ch3\u003E研究の問い合わせ先\u003C\u002Fh3\u003E\n  \u003Cp\u003E本研究の内容に関してご意⾒・ご質問などがございましたら，研究責任者にお尋ね下さい。\u003Cbr\u003E\u003Cbr\u003E\n  連絡先： 愛知学院大学心理学部心理学科 小野島昂洋\u003Cbr\u003E\n  E-mail: onoshima.t@gmail.com",
          "name": ""
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "研究への参加に同意する",
              "coding": "1"
            },
            {
              "label": "研究への参加に同意しない（研究を終了します）",
              "coding": "2"
            }
          ],
          "label": "上記の説明をよく読んだ上で，研究への参加に同意しますか。",
          "name": "IC"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "IC",
      "skip": "${state.isMobile}",
      "tardy": true,
      "plugins": []
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
let participantID = this.random.range(100000, 1000000);
let stimType = participantID % 2 == 0 ? 'letter' : 'arrow';
let verification = this.random.range(1000, 10000) + '61';

this.options.templateParameters.push({
  participantID: participantID,
  stimType: stimType,
  verification: verification
  });


}
      },
      "title": "Assign Participant ID and Stimulus Type",
      "tardy": true,
      "plugins": [
        {
          "type": "fullscreen",
          "message": "この実験はフルスクリーンモードで行います",
          "hint": "クリックするとフルスクリーンモードになります",
          "path": "lab.plugins.Fullscreen"
        }
      ],
      "skip": "${state.isMobile || state.IC != 1}",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {
          "before:prepare": function anonymous(
) {
this.state.screenWidth = window.screen.width;
this.state.screenHeight = window.screen.height;
this.state.innerWidth = window.innerWidth;
this.state.innerHeight = window.innerHeight;
this.state.devicePixelRatio = window.devicePixelRatio;
}
        },
        "title": "Main",
        "plugins": [],
        "tardy": true,
        "content": [
          {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "run": function anonymous(
) {
document.body.style.cursor = 'none';
},
              "end": function anonymous(
) {
document.body.style.cursor = 'auto';
}
            },
            "title": "Stroop",
            "content": [
              {
                "type": "lab.html.Page",
                "items": [
                  {
                    "type": "text",
                    "title": "実験にご参加いただきありがとうございます。",
                    "content": ""
                  },
                  {
                    "required": true,
                    "type": "html",
                    "content": "\u003Cp\u003Eこれから，画面に表示される矢印の向きに対応したキーを押す課題に取り組んでいただきます。\u003C\u002Fp\u003E\n\n\u003Cp\u003Eまず画面中央に「+」が表示されるので，そこを見てください。\n続いて，画面の左右のいずれかに矢印が表示されます。\u003C\u002Fp\u003E\n\n\u003Cp\u003E左向きの矢印が表示されたら\u003Ckbd\u003EF\u003C\u002Fkbd\u003Eキーを押してください。\u003Cbr\u003E\n右向きの矢印が表示されたら\u003Ckbd\u003EJ\u003C\u002Fkbd\u003Eキーを押してください。\u003C\u002Fp\u003E\n\n\u003Cp\u003E矢印が\u003Cstrong\u003E表示される位置は関係ありません\u003C\u002Fstrong\u003E。\n矢印の\u003Cstrong\u003E向きのみ\u003C\u002Fstrong\u003Eに注目してキーを押してください。\u003C\u002Fp\u003E\n\n\u003Cp\u003Eできる限り素早く，正確にキーを押してください。\u003C\u002Fp\u003E\n\n\u003Cp\u003E左手の人差し指を\u003Ckbd\u003EF\u003C\u002Fkbd\u003Eに，右手の人差し指を\u003Ckbd\u003EJ\u003C\u002Fkbd\u003Eキーに置いてください。\nいずれかのキーを押すと，練習が始まります。\u003C\u002Fp\u003E",
                    "name": ""
                  }
                ],
                "scrollTop": true,
                "submitButtonText": "Continue →",
                "submitButtonPosition": "hidden",
                "files": {},
                "responses": {
                  "keypress(f)": "left",
                  "keypress(j)": "right"
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "InstructionArrow",
                "skip": "${parameters.stimType == 'letter'}"
              },
              {
                "type": "lab.html.Page",
                "items": [
                  {
                    "type": "text",
                    "title": "実験にご参加いただきありがとうございます。",
                    "content": ""
                  },
                  {
                    "required": true,
                    "type": "html",
                    "content": "\u003Cp\u003Eこれから，画面に表示される文字に対応したキーを押す課題に取り組んでいただきます。\u003C\u002Fp\u003E\n\n\u003Cp\u003Eまず画面中央に「+」が表示されるので，そこを見てください。\n続いて，画面の左右のいずれか「左」もしくは「右」の文字が表示されます。\u003C\u002Fp\u003E\n\n\u003Cp\u003E「左」の文字が表示されたら\u003Ckbd\u003EF\u003C\u002Fkbd\u003Eキーを押してください。\u003Cbr\u003E\n「右」の文字が表示されたら\u003Ckbd\u003EJ\u003C\u002Fkbd\u003Eキーを押してください。\u003C\u002Fp\u003E\n\n\u003Cp\u003E文字が\u003Cstrong\u003E表示される位置は関係ありません\u003C\u002Fstrong\u003E。\n文字の\u003Cstrong\u003E内容のみ\u003C\u002Fstrong\u003Eに注目してキーを押してください。\u003C\u002Fp\u003E\n\n\u003Cp\u003Eできる限り素早く，正確にキーを押してください。\u003C\u002Fp\u003E\n\n\u003Cp\u003E左手の人差し指を\u003Ckbd\u003EF\u003C\u002Fkbd\u003Eに，右手の人差し指を\u003Ckbd\u003EJ\u003C\u002Fkbd\u003Eキーに置いてください。\nいずれかのキーを押すと，練習が始まります。\u003C\u002Fp\u003E",
                    "name": ""
                  }
                ],
                "scrollTop": true,
                "submitButtonText": "Continue →",
                "submitButtonPosition": "hidden",
                "files": {},
                "responses": {
                  "keypress(f)": "left",
                  "keypress(j)": "right"
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "InstructionLetter",
                "skip": "${parameters.stimType == 'arrow'}"
              },
              {
                "type": "lab.flow.Loop",
                "templateParameters": [
                  {
                    "condition": "congruent",
                    "position": "left",
                    "correctResponse": "left",
                    "block": 0
                  },
                  {
                    "condition": "incongruent",
                    "position": "right",
                    "correctResponse": "left",
                    "block": 0
                  },
                  {
                    "condition": "incongruent",
                    "position": "left",
                    "correctResponse": "right",
                    "block": 0
                  },
                  {
                    "condition": "congruent",
                    "position": "right",
                    "correctResponse": "right",
                    "block": 0
                  }
                ],
                "sample": {
                  "mode": "draw-shuffle",
                  "n": "24"
                },
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Practice",
                "shuffleGroups": [],
                "template": {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Trial",
                  "content": [
                    {
                      "type": "lab.canvas.Screen",
                      "content": [
                        {
                          "type": "i-text",
                          "left": 0,
                          "top": 0,
                          "angle": 0,
                          "width": 26.33,
                          "height": 45.2,
                          "stroke": null,
                          "strokeWidth": 1,
                          "fill": "black",
                          "text": "+",
                          "fontStyle": "normal",
                          "fontWeight": "normal",
                          "fontSize": "40",
                          "fontFamily": "sans-serif",
                          "lineHeight": 1.16,
                          "textAlign": "center"
                        }
                      ],
                      "viewport": [
                        800,
                        600
                      ],
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "FIxation",
                      "timeout": "500"
                    },
                    {
                      "type": "lab.canvas.Screen",
                      "content": [],
                      "viewport": [
                        800,
                        600
                      ],
                      "files": {},
                      "responses": {
                        "keypress(f)": "left",
                        "keypress(j)": "right"
                      },
                      "parameters": {},
                      "messageHandlers": {
                        "before:prepare": function anonymous(
) {
// set positions and angle
let positionRect;
let positionTriangle;
let angle;
let positionLetter;
let text;

if (this.parameters.condition === 'congruent') {
  if (this.parameters.position === 'left') {
    positionTriangle = -349; // 画面解像度によっては線がはいるため1ピクセル少なく
    positionRect = -300
    angle = 270;
    positionLetter = -300;
    text = '左';
  } else { // right
    positionTriangle = 349;
    positionRect = 300
    angle = 90;
    positionLetter = 300;
    text = '右';
  } 
} else { // incongruent
  if (this.parameters.position === 'left') {
    positionTriangle = -251;
    positionRect = -300
    angle = 90;
    positionLetter = -300;
    text = '右';
  } else { // right
    positionTriangle = 251;
    positionRect = 300
    angle = 270;
    positionLetter = 300;
    text = '左';
  } 
}

// draw the arrow
if (this.parameters.stimType == "arrow") {
  this.options.content.push({
    type: 'triangle',
    left: positionTriangle,
    top: 0,
    width: 60,
    height: 50, 
    fill: 'black',
    angle: angle
  })
this.options.content.push({
  type: 'rect',
  left: positionRect,
  top: 0,
  width: 50,
  height: 20,
  fill: 'black'
})
} else {
  this.options.content.push({
    type: 'i-text',
    left: positionLetter,
    top: 0,
    width: 60,
    height: 50,
    fill: 'black',
    text: text,
    fontSize: 40,
  })
}


}
                      },
                      "title": "Stimulus",
                      "timeout": "2000",
                      "correctResponse": "${parameters.correctResponse}"
                    },
                    {
                      "type": "lab.canvas.Screen",
                      "content": [
                        {
                          "type": "i-text",
                          "left": 0,
                          "top": 0,
                          "angle": 0,
                          "width": 468.54,
                          "height": 36.16,
                          "stroke": null,
                          "strokeWidth": 1,
                          "fill": "black",
                          "text": "${ state.correct ? \"\" : \"不正解\"}",
                          "fontStyle": "normal",
                          "fontWeight": "normal",
                          "fontSize": 32,
                          "fontFamily": "sans-serif",
                          "lineHeight": 1.16,
                          "textAlign": "center"
                        }
                      ],
                      "viewport": [
                        800,
                        600
                      ],
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {
                        "before:prepare": function anonymous(
) {
// 反応がなければ問答無用で不正解に
if (this.state.ended_on == 'timeout') {
  this.state.correct = false;
}

}
                      },
                      "title": "BlankAndFeedback",
                      "timeout": "1000",
                      "tardy": true
                    }
                  ]
                }
              },
              {
                "type": "lab.html.Page",
                "items": [
                  {
                    "type": "text",
                    "title": "練習は終了です",
                    "content": "ここからは本番となります。不正解の場合でもフィードバックはありません。"
                  },
                  {
                    "required": true,
                    "type": "html",
                    "content": "\u003Cp\u003Eこの課題では，左向きの矢印が表示されたら\u003Ckbd\u003EF\u003C\u002Fkbd\u003Eキーを，右向きの矢印が表示されたら\u003Ckbd\u003EJ\u003C\u002Fkbd\u003Eキーを押してください。\u003C\u002Fp\u003E\n\n\u003Cp\u003E矢印が\u003Cstrong\u003E表示される位置は関係ありません\u003C\u002Fstrong\u003E。\n矢印の\u003Cstrong\u003E向きのみ\u003C\u002Fstrong\u003Eに注目してキーを押してください。\u003C\u002Fp\u003E\n\n\u003Cp\u003Eできる限り素早く，正確にキーを押してください。\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ckbd\u003EF\u003C\u002Fkbd\u003Eか\u003Ckbd\u003EJ\u003C\u002Fkbd\u003Eのキーを押すと，本番が始まります\u003C\u002Fp\u003E",
                    "name": ""
                  }
                ],
                "scrollTop": true,
                "submitButtonText": "Continue →",
                "submitButtonPosition": "hidden",
                "files": {},
                "responses": {
                  "keypress(f)": "left",
                  "keypress(j)": "right"
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "ReadyArrow",
                "skip": "${parameters.stimType == 'letter'}"
              },
              {
                "type": "lab.html.Page",
                "items": [
                  {
                    "type": "text",
                    "title": "練習は終了です",
                    "content": "ここからは本番となります。不正解の場合でもフィードバックはありません。"
                  },
                  {
                    "required": true,
                    "type": "html",
                    "content": "\u003Cp\u003Eこの課題では，「左」の文字が表示されたら\u003Ckbd\u003EF\u003C\u002Fkbd\u003Eキーを，「右」の文字が表示されたら\u003Ckbd\u003EJ\u003C\u002Fkbd\u003Eキーを押してください。\u003C\u002Fp\u003E\n\n\u003Cp\u003E文字が\u003Cstrong\u003E表示される位置は関係ありません\u003C\u002Fstrong\u003E。\n文字の\u003Cstrong\u003E内容のみ\u003C\u002Fstrong\u003Eに注目してキーを押してください。\u003C\u002Fp\u003E\n\n\u003Cp\u003Eできる限り素早く，正確にキーを押してください。\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ckbd\u003EF\u003C\u002Fkbd\u003Eか\u003Ckbd\u003EJ\u003C\u002Fkbd\u003Eのキーを押すと，本番が始まります\u003C\u002Fp\u003E",
                    "name": ""
                  }
                ],
                "scrollTop": true,
                "submitButtonText": "Continue →",
                "submitButtonPosition": "hidden",
                "files": {},
                "responses": {
                  "keypress(f)": "left",
                  "keypress(j)": "right"
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "ReadyLetter",
                "skip": "${parameters.stimType == 'arrow'}"
              },
              {
                "type": "lab.flow.Loop",
                "templateParameters": [
                  {
                    "condition": "congruent",
                    "position": "left",
                    "correctResponse": "left",
                    "block": 1
                  },
                  {
                    "condition": "incongruent",
                    "position": "right",
                    "correctResponse": "left",
                    "block": 1
                  },
                  {
                    "condition": "incongruent",
                    "position": "left",
                    "correctResponse": "right",
                    "block": 1
                  },
                  {
                    "condition": "congruent",
                    "position": "right",
                    "correctResponse": "right",
                    "block": 1
                  }
                ],
                "sample": {
                  "mode": "draw-shuffle",
                  "n": "48"
                },
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Block1",
                "shuffleGroups": [],
                "template": {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Trial",
                  "content": [
                    {
                      "type": "lab.canvas.Screen",
                      "content": [
                        {
                          "type": "i-text",
                          "left": 0,
                          "top": 0,
                          "angle": 0,
                          "width": 26.33,
                          "height": 45.2,
                          "stroke": null,
                          "strokeWidth": 1,
                          "fill": "black",
                          "text": "+",
                          "fontStyle": "normal",
                          "fontWeight": "normal",
                          "fontSize": "40",
                          "fontFamily": "sans-serif",
                          "lineHeight": 1.16,
                          "textAlign": "center"
                        }
                      ],
                      "viewport": [
                        800,
                        600
                      ],
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "FIxation",
                      "timeout": "500"
                    },
                    {
                      "type": "lab.canvas.Screen",
                      "content": [],
                      "viewport": [
                        800,
                        600
                      ],
                      "files": {},
                      "responses": {
                        "keypress(f)": "left",
                        "keypress(j)": "right"
                      },
                      "parameters": {},
                      "messageHandlers": {
                        "before:prepare": function anonymous(
) {
// set positions and angle
let positionRect;
let positionTriangle;
let angle;
let positionLetter;
let text;

if (this.parameters.condition === 'congruent') {
  if (this.parameters.position === 'left') {
    positionTriangle = -349; // 解像度によっては線がはいるため1ピクセル少なめ
    positionRect = -300
    angle = 270;
    positionLetter = -300;
    text = '左';
  } else { // right
    positionTriangle = 349;
    positionRect = 300
    angle = 90;
    positionLetter = 300;
    text = '右';
  } 
} else { // incongruent
  if (this.parameters.position === 'left') {
    positionTriangle = -251;
    positionRect = -300
    angle = 90;
    positionLetter = -300;
    text = '右';
  } else { // right
    positionTriangle = 251;
    positionRect = 300
    angle = 270;
    positionLetter = 300;
    text = '左';
  } 
}

// draw the arrow
if (this.parameters.stimType == "arrow") {
  this.options.content.push({
    type: 'triangle',
    left: positionTriangle,
    top: 0,
    width: 60,
    height: 50, 
    fill: 'black',
    angle: angle
  })
this.options.content.push({
  type: 'rect',
  left: positionRect,
  top: 0,
  width: 50,
  height: 20,
  fill: 'black'
})
} else {
  this.options.content.push({
    type: 'i-text',
    left: positionLetter,
    top: 0,
    width: 60,
    height: 50,
    fill: 'black',
    text: text,
    fontSize: 40,
  })
}


}
                      },
                      "title": "Stimulus",
                      "timeout": "2000",
                      "correctResponse": "${parameters.correctResponse}"
                    },
                    {
                      "type": "lab.canvas.Screen",
                      "content": [],
                      "viewport": [
                        800,
                        600
                      ],
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "Blank",
                      "timeout": "1000"
                    }
                  ]
                }
              },
              {
                "type": "lab.html.Page",
                "items": [
                  {
                    "type": "text",
                    "title": "休憩です"
                  },
                  {
                    "required": true,
                    "type": "html",
                    "content": "\u003Cp\u003Eこの課題では，左向きの矢印が表示されたら\u003Ckbd\u003EF\u003C\u002Fkbd\u003Eキーを，右向きの矢印が表示されたら\u003Ckbd\u003EJ\u003C\u002Fkbd\u003Eキーを押してください。\u003C\u002Fp\u003E\n\n\u003Cp\u003E矢印が\u003Cstrong\u003E表示される位置は関係ありません\u003C\u002Fstrong\u003E。\n矢印の\u003Cstrong\u003E向きのみ\u003C\u002Fstrong\u003Eに注目してキーを押してください。\u003C\u002Fp\u003E\n\n\u003Cp\u003Eできる限り素早く，正確にキーを押してください。\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ckbd\u003EF\u003C\u002Fkbd\u003Eか\u003Ckbd\u003EJ\u003C\u002Fkbd\u003Eのキーを押すと，再開します\u003C\u002Fp\u003E",
                    "name": ""
                  }
                ],
                "scrollTop": true,
                "submitButtonText": "Continue →",
                "submitButtonPosition": "hidden",
                "files": {},
                "responses": {
                  "keypress(f)": "left",
                  "keypress(j)": "right"
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "RestArrow",
                "skip": "${parameters.stimType == 'letter'}"
              },
              {
                "type": "lab.html.Page",
                "items": [
                  {
                    "type": "text",
                    "title": "休憩です"
                  },
                  {
                    "required": true,
                    "type": "html",
                    "content": "\u003Cp\u003Eこの課題では，「左」の文字が表示されたら\u003Ckbd\u003EF\u003C\u002Fkbd\u003Eキーを，「右」の文字が表示されたら\u003Ckbd\u003EJ\u003C\u002Fkbd\u003Eキーを押してください。\u003C\u002Fp\u003E\n\n\u003Cp\u003E文字が\u003Cstrong\u003E表示される位置は関係ありません\u003C\u002Fstrong\u003E。\n文字の\u003Cstrong\u003E内容のみ\u003C\u002Fstrong\u003Eに注目してキーを押してください。\u003C\u002Fp\u003E\n\n\u003Cp\u003Eできる限り素早く，正確にキーを押してください。\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Ckbd\u003EF\u003C\u002Fkbd\u003Eか\u003Ckbd\u003EJ\u003C\u002Fkbd\u003Eのキーを押すと，再開します\u003C\u002Fp\u003E",
                    "name": ""
                  }
                ],
                "scrollTop": true,
                "submitButtonText": "Continue →",
                "submitButtonPosition": "hidden",
                "files": {},
                "responses": {
                  "keypress(f)": "left",
                  "keypress(j)": "right"
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "RestLetter",
                "skip": "${parameters.stimType == 'arrow'}"
              },
              {
                "type": "lab.flow.Loop",
                "templateParameters": [
                  {
                    "condition": "congruent",
                    "position": "left",
                    "correctResponse": "left",
                    "block": 2
                  },
                  {
                    "condition": "incongruent",
                    "position": "right",
                    "correctResponse": "left",
                    "block": 2
                  },
                  {
                    "condition": "incongruent",
                    "position": "left",
                    "correctResponse": "right",
                    "block": 2
                  },
                  {
                    "condition": "congruent",
                    "position": "right",
                    "correctResponse": "right",
                    "block": 2
                  }
                ],
                "sample": {
                  "mode": "draw-shuffle",
                  "n": "48"
                },
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Block2",
                "shuffleGroups": [],
                "template": {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Trial",
                  "content": [
                    {
                      "type": "lab.canvas.Screen",
                      "content": [
                        {
                          "type": "i-text",
                          "left": 0,
                          "top": 0,
                          "angle": 0,
                          "width": 26.33,
                          "height": 45.2,
                          "stroke": null,
                          "strokeWidth": 1,
                          "fill": "black",
                          "text": "+",
                          "fontStyle": "normal",
                          "fontWeight": "normal",
                          "fontSize": "40",
                          "fontFamily": "sans-serif",
                          "lineHeight": 1.16,
                          "textAlign": "center"
                        }
                      ],
                      "viewport": [
                        800,
                        600
                      ],
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "FIxation",
                      "timeout": "500"
                    },
                    {
                      "type": "lab.canvas.Screen",
                      "content": [],
                      "viewport": [
                        800,
                        600
                      ],
                      "files": {},
                      "responses": {
                        "keypress(f)": "left",
                        "keypress(j)": "right"
                      },
                      "parameters": {},
                      "messageHandlers": {
                        "before:prepare": function anonymous(
) {
// set positions and angle
let positionRect;
let positionTriangle;
let angle;
let positionLetter;
let text;

if (this.parameters.condition === 'congruent') {
  if (this.parameters.position === 'left') {
    positionTriangle = -349; // 解像度によっては線がはいるため1ピクセル少なめ
    positionRect = -300
    angle = 270;
    positionLetter = -300;
    text = '左';
  } else { // right
    positionTriangle = 349;
    positionRect = 300
    angle = 90;
    positionLetter = 300;
    text = '右';
  } 
} else { // incongruent
  if (this.parameters.position === 'left') {
    positionTriangle = -251;
    positionRect = -300
    angle = 90;
    positionLetter = -300;
    text = '右';
  } else { // right
    positionTriangle = 251;
    positionRect = 300
    angle = 270;
    positionLetter = 300;
    text = '左';
  } 
}

// draw the arrow
if (this.parameters.stimType == "arrow") {
  this.options.content.push({
    type: 'triangle',
    left: positionTriangle,
    top: 0,
    width: 60,
    height: 50, 
    fill: 'black',
    angle: angle
  })
this.options.content.push({
  type: 'rect',
  left: positionRect,
  top: 0,
  width: 50,
  height: 20,
  fill: 'black'
})
} else {
  this.options.content.push({
    type: 'i-text',
    left: positionLetter,
    top: 0,
    width: 60,
    height: 50,
    fill: 'black',
    text: text,
    fontSize: 40,
  })
}


}
                      },
                      "title": "Stimulus",
                      "timeout": "2000",
                      "correctResponse": "${parameters.correctResponse}"
                    },
                    {
                      "type": "lab.canvas.Screen",
                      "content": [],
                      "viewport": [
                        800,
                        600
                      ],
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "Blank",
                      "timeout": "1000"
                    }
                  ]
                }
              }
            ]
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "likert",
                "items": [
                  {
                    "label": "悪いクセをやめられない",
                    "coding": "SC-1"
                  },
                  {
                    "label": "だらけてしまう",
                    "coding": "SC-2"
                  },
                  {
                    "label": "場にそぐわないことを言ってしまう",
                    "coding": "SC-3"
                  },
                  {
                    "label": "自分にとってよくないことでも，楽しければやってしまう",
                    "coding": "SC-4"
                  },
                  {
                    "label": "自分にとってよくない誘いは，断る",
                    "coding": "SC-5"
                  },
                  {
                    "label": "もっと自制心があればよいのにと思う",
                    "coding": "SC-6"
                  },
                  {
                    "label": "誘惑に負けない",
                    "coding": "SC-7"
                  },
                  {
                    "label": "自分に厳しい人だと言われる",
                    "coding": "SC-8"
                  },
                  {
                    "label": "集中力がない",
                    "coding": "SC-9"
                  },
                  {
                    "label": "先のことを考えて，計画的に行動する",
                    "coding": "SC-10"
                  },
                  {
                    "label": "よくないことと知りつつ，やめられない時がある",
                    "coding": "SC-11"
                  },
                  {
                    "label": "他にどういう方法があるか，よく考えずに行動してしまう",
                    "coding": "SC-12"
                  },
                  {
                    "label": "趣味や娯楽のせいで，やるべきことがそっちのけになることがある",
                    "coding": "SC-13"
                  }
                ],
                "width": "5",
                "anchors": [
                  "全くあてはまらない",
                  null,
                  "",
                  null,
                  "とてもあてはまる"
                ],
                "shuffle": true,
                "help": "",
                "name": "selfControl",
                "label": "それぞれの項目は，あなたにどのくらいあてはまりますか。あなたにあてはまる程度を答えてください。"
              }
            ],
            "scrollTop": true,
            "submitButtonText": "次へ →",
            "submitButtonPosition": "right",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "SelfControl",
            "width": "l"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "likert",
                "items": [
                  {
                    "label": "たとえ何かよくないことが私の身に起ころうとしていても，怖くなったり神経質になったりすることはほとんどない",
                    "coding": "BIS-1"
                  },
                  {
                    "label": "私は，欲しいものを手に入れるためには格別に努力する",
                    "coding": "Drive-2"
                  },
                  {
                    "label": "何かがうまくいっているときは，それを続けることがとても楽しいと思う",
                    "coding": "Reward-3"
                  },
                  {
                    "label": "面白そうだと思えば，私はいつも何か新しいものを試したいと考えている",
                    "coding": "Fun-4"
                  },
                  {
                    "label": "私は，欲しいものを手に入れたとき，興奮し，活気づけられる",
                    "coding": "Reward-5"
                  },
                  {
                    "label": "非難されたり怒られたりすると，私はかなり傷つく",
                    "coding": "BIS-6"
                  },
                  {
                    "label": "欲しいものがあると，私はたいていそれを手に入れるために全力を挙げる",
                    "coding": "Drive-7"
                  },
                  {
                    "label": "楽しいかもしれないから，というだけの理由で何かをすることがよくある",
                    "coding": "Fun-8"
                  },
                  {
                    "label": "欲しいものを手にいれるチャンスを見つけると，すぐに動き出す",
                    "coding": "Drive-9"
                  },
                  {
                    "label": "誰かが私のことを怒っていると考えたり，知ったりすると，私はかなり心配になったり動揺したりする",
                    "coding": "BIS-10"
                  },
                  {
                    "label": "何か好きなことをするチャンスをみつけると，私はすぐに興奮する",
                    "coding": "Reward-11"
                  },
                  {
                    "label": "私はしばしば時のはずみで行動する",
                    "coding": "Fun-12"
                  },
                  {
                    "label": "何かよくないことが起ころうとしていると考えると，私はたいていくよくよ悩む",
                    "coding": "BIS-13"
                  },
                  {
                    "label": "よいことが私の身に起こると，そのことは，私に強い影響を与える",
                    "coding": "Reward-14"
                  },
                  {
                    "label": "何か重要なことをあまりうまくできなかったと考えると不安になる",
                    "coding": "BIS-15"
                  },
                  {
                    "label": "私は，興奮や新しい刺激を切望している",
                    "coding": "Fun-16"
                  },
                  {
                    "label": "私は，何かを追い求めているときには徹底的にやる",
                    "coding": "Drive-17"
                  },
                  {
                    "label": "私は，友達と比べると不安の種はとても少ない",
                    "coding": "BIS-18"
                  },
                  {
                    "label": "競争に勝ったら，私は興奮するだろう",
                    "coding": "Reward-19"
                  },
                  {
                    "label": "私は，間違いを犯すことを心配している",
                    "coding": "BIS-20"
                  },
                  {
                    "label": "この項目では「とてもあてはまる」を選択してください",
                    "coding": "DQS-1"
                  }
                ],
                "width": "5",
                "anchors": [
                  "まったくあてはまらない",
                  null,
                  null,
                  "とてもあてはまる"
                ],
                "label": "それぞれの項目は，あなたにどのくらいあてはまりますか。あなたにあてはまる程度を答えてください。",
                "shuffle": true,
                "name": "BISBAS"
              }
            ],
            "scrollTop": true,
            "submitButtonText": "次へ →",
            "submitButtonPosition": "right",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "BISBAS",
            "width": "l"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "likert",
                "items": [
                  {
                    "label": "私は自分で決めたことを後悔しない。",
                    "coding": "selfDeception-1"
                  },
                  {
                    "label": "私は自分の判断をいつも信じている。",
                    "coding": "selfDeception-2"
                  },
                  {
                    "label": "自分で決心したことが他人の意見で変わることはめったにない。",
                    "coding": "selfDeception-3"
                  },
                  {
                    "label": "「なぜそれが好きなのですか？」と聞かれた時，何についても説明できる。",
                    "coding": "selfDeception-4"
                  },
                  {
                    "label": "私は自分の人生を完全に思い通りに進めている。",
                    "coding": "selfDeception-5"
                  },
                  {
                    "label": "たとえ何人かの人に嫌われても，私にとっては問題ない。",
                    "coding": "selfDeception-6"
                  },
                  {
                    "label": "私のことを他人が本当にどう思っているのか気にならない。",
                    "coding": "selfDeception-7"
                  },
                  {
                    "label": "時々，すぐに決心できなくて失敗することがある。",
                    "coding": "selfDeception-8"
                  },
                  {
                    "label": "なぜ自分がそうしたのか，自分でも分からないときがある。",
                    "coding": "selfDeception-9"
                  },
                  {
                    "label": "いろいろなことについて，つい余計なことを考える。",
                    "coding": "selfDeception-10"
                  },
                  {
                    "label": "私が感じた他人の第一印象はよく当たっている。",
                    "coding": "selfDeception-11"
                  },
                  {
                    "label": "私はきわめて理性的な人間である。",
                    "coding": "selfDeception-12"
                  },
                  {
                    "label": "他人には言えないようなことをしたことがある。",
                    "coding": "impressionManagement-13"
                  },
                  {
                    "label": "必要であれば，時々は嘘をつく。",
                    "coding": "impressionManagement-14"
                  },
                  {
                    "label": "人をうまく利用したことがある。",
                    "coding": "impressionManagement-15"
                  },
                  {
                    "label": "友達の陰口を言ったことがある。",
                    "coding": "impressionManagement-16"
                  },
                  {
                    "label": "人をののしったことがない。",
                    "coding": "impressionManagement-17"
                  },
                  {
                    "label": "かなりよくない習慣をいくつか持っている。",
                    "coding": "impressionManagement-18"
                  },
                  {
                    "label": "仮病で仕事や学校を休んだことがある。",
                    "coding": "impressionManagement-19"
                  },
                  {
                    "label": "道路や公共の場所で，ごみを落としたことはない。",
                    "coding": "impressionManagement-20"
                  },
                  {
                    "label": "人と争ったとき，水に流すよりもむしろ復しゅうする。",
                    "coding": "impressionManagement-21"
                  },
                  {
                    "label": "私は恐らく捕まらないような時でも，いつも法律に従っている。",
                    "coding": "impressionManagement-22"
                  },
                  {
                    "label": "お釣りを多くもらったとき，気づいてもそのまま受け取ってしまう。",
                    "coding": "impressionManagement-23"
                  },
                  {
                    "label": "図書館の本や店の商品を破損した時は，必ずそれを報告する。",
                    "coding": "impressionManagement-24"
                  }
                ],
                "width": "5",
                "anchors": [
                  "まったくあてはまらない",
                  null,
                  null,
                  "",
                  "非常にあてはまる"
                ],
                "label": "それぞれの項目は，あなたにどのくらいあてはまりますか。あなたにあてはまる程度を答えてください。",
                "shuffle": true,
                "name": "BIDR"
              }
            ],
            "scrollTop": true,
            "submitButtonText": "次へ →",
            "submitButtonPosition": "right",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "BIDR",
            "width": "l"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "type": "text",
                "title": "最後にあなた自身および実験・調査の実施状況についての質問にご回答ください。"
              },
              {
                "required": true,
                "type": "radio",
                "label": "性別",
                "options": [
                  {
                    "label": "男性",
                    "coding": "male"
                  },
                  {
                    "label": "女性",
                    "coding": "female"
                  },
                  {
                    "label": "ノンバイナリー",
                    "coding": "non-binary"
                  },
                  {
                    "label": "回答しない",
                    "coding": "NA"
                  }
                ],
                "name": "gender"
              },
              {
                "required": true,
                "type": "input",
                "attributes": {
                  "type": "number",
                  "min": "18",
                  "max": "100"
                },
                "label": "年齢",
                "help": "半角数字で入力してください。",
                "name": "age"
              },
              {
                "required": true,
                "type": "radio",
                "label": "実験・調査に使用しているデバイス",
                "options": [
                  {
                    "label": "デスクトップPC",
                    "coding": "desktop"
                  },
                  {
                    "label": "ノートPC",
                    "coding": "laptop"
                  },
                  {
                    "label": "その他",
                    "coding": "other"
                  }
                ],
                "name": "PC"
              },
              {
                "required": true,
                "type": "radio",
                "label": "利き手",
                "options": [
                  {
                    "label": "右",
                    "coding": "right"
                  },
                  {
                    "label": "左",
                    "coding": "left"
                  },
                  {
                    "label": "両方",
                    "coding": "mixed"
                  }
                ],
                "name": "handedness"
              },
              {
                "required": true,
                "type": "radio",
                "label": "実験・調査へ参加する上で何か問題はありましたか。",
                "options": [
                  {
                    "label": "問題はなかった",
                    "coding": "none"
                  },
                  {
                    "label": "実験・調査実施に支障のない程度の問題があった",
                    "coding": "minor"
                  },
                  {
                    "label": "実験・調査実施に支障のある大きな問題があった",
                    "coding": "major"
                  }
                ],
                "name": "trouble"
              },
              {
                "required": false,
                "type": "input",
                "label": "「実験・調査実施に支障のない程度の問題があった」「実験・調査実施に支障のある大きな問題があった」を選択した場合はその内容をお書きください。",
                "name": "troubleContent"
              }
            ],
            "scrollTop": true,
            "submitButtonText": "次へ →",
            "submitButtonPosition": "right",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Other"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "type": "text",
                "title": "実験にご参加いただきありがとうございました。",
                "content": "\u003Cp\u003E本日は実験に参加いただきありがとうございます。\u003C\u002Fp\u003E\n\n\u003Cp\u003E実験参加の確認コードは「${parameters.verification}」です。\n指定されたURLで入力してください。\u003Cbr\u003E\n次の画面に進むと，確認コードを再表示することはできません。\u003Cbr\u003E\n必ずメモをとり，画面の写真をとるようにしてください。\u003C\u002Fp\u003E\n\n\n\u003Cp\u003E「実験終了」ボタンを押すと実験を終了します。\u003C\u002Fp\u003E"
              }
            ],
            "scrollTop": true,
            "submitButtonText": "実験終了",
            "submitButtonPosition": "right",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
//ファイル名をユーザーIDにする
const participantID = this.parameters.participantID

//csvファイルで保存する場合
const filename = participantID + "_data.csv"
const data = study.internals.controller.datastore.exportCsv();

fetch("https://pipe.jspsych.org/api/data/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  body: JSON.stringify({
    experimentID: "mGi8e33w5ebe",
    filename: filename,
    data: data,
  }),
});
console.log('データ送信終了');
}
            },
            "title": "Thanks",
            "tardy": true
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "お知らせ",
          "content": "この実験は，PCからのみ参加いただけます。\nスマートフォンやタブレットPCでは参加いただけません。\n画面を閉じて終了してください。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "実験を終了する",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Instruction for Non PC users",
      "tardy": true,
      "skip": "${!(state.isMobile)}"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "実験を終了します。画面を閉じてください。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "End of Experiment"
    }
  ]
})

// Let's go!
study.run()