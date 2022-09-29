









### A Strange Little Discovery

I was debugging something with a simple checksum algorithm as I was deep in some complex code, and this thing got me.
Both Athens and Naples return the same number, based on the ASCII table.

```JavaScript

['Athens', 'Naples']
    .map(name=>name.split('')
    .map(letter=>letter.charCodeAt())
    .reduce((accumulator, asciiValue)=>accumulator+asciiValue))

// Array [ 611, 611 ] :(

```











### Use An Object For Command Arguments

Very useful in executing system commands, with clean to read code.

```JavaScript

async function createCover(selected, dest, square = false){
  const command = 'montage';
  const args = {
    '-background': '#f96982',
    '_sources': square?takeRight(selected, Math.pow(tile,2)):selected,
    '-tile': (square?parseInt(Math.sqrt(selected.length)):Math.ceil(Math.sqrt(selected.length))) + 'x',
    '-geometry': '+0+0',
    '_destination': dest,
  }
  const { stdout } = await execFile(command, Object.entries(args).map(([k,v])=>[k.startsWith('_')?undefined:k,v]).flat(2).filter(i=>i));
  if(stdout) console.log(stdout);
}

```










### Quick Drag And Drop For Svelte

```JavaScript

<script>
let selected;
let list = [
	{id: 1, title: "I"},
	{id: 2, title: "Am"},
	{id: 3, title: "Yoda"}
];
</script>

<ul>
	{#each list as item, index (item.id)}
	<li
			draggable="true"
			on:dragstart={(event)=>event.dataTransfer.setData("text/plain", index)}
		  on:dragover={(event)=>(parseInt(event.dataTransfer.getData("text/plain"))==index)?null:event.preventDefault()}
		  on:drop={(event)=>{event.preventDefault(); list.splice(index, 0, list.splice(parseInt(event.dataTransfer.getData("text/plain")), 1)[0]); list=list; console.log(`Moved: ${event.dataTransfer.getData("text/plain")} to ${index}`)}}
		  on:click={()=>{selected=item.id; console.log(`Selected: ${selected}`)}}>
		{item.title}
	</li>
	{/each}
</ul>

{#if selected}
selected: {selected}
{/if}

```











### Make Vinyl Files From A Simple Array And Use Gulp

Useful for generating files based on some content.

```JavaScript

import {Server} from 'socket.io';
import Vinyl from 'vinyl';
import gulp from 'gulp';
import uglify from 'gulp-uglify';
import babel from 'gulp-babel';
import gulpIf from 'gulp-if';
import map from 'map-stream';
import { Readable } from 'node:stream';
/*...*/


socket.on('generate', data => {
  // Make Vinyl Files
  const vfs = data.files
  .map(o=>Object.assign(o, { contents: Buffer.from( isString(o.contents)?o.contents:JSON.stringify(o.contents),'utf-8') })) // create buffer
  .map(o=>new Vinyl(o)) // convert to vinyl object
  // Stream To Dest
  Readable.from(vfs)
  .pipe(map(log))
  .pipe(gulpIf(isJavaScript, babel({   })))
  //.pipe(gulpIf(isJavaScript, uglify()))
  .on('error', console.log)
  .pipe(gulp.dest(path.join('dist',data.name), { sourcemaps: '.' }));
 });

 ```










### Blob To Buffer

```JavaScript

var reader = new FileReader();
reader.addEventListener("loadend", function() {
var buffer = new Buffer(reader.result, "binary");
 fs.writeFile("test.wav", buffer, function(err) {
   if(err) {
     console.log("err", err);
   } else {
     // success
   }
 });
});
reader.readAsArrayBuffer(wavBlob);


```











### Know What Directory Your Code Is In

This just restores the old __dirname, useful for dynamically loading modules

```JavaScript

import path from 'path';
const moduleURL = new URL(import.meta.url);
const dirname = path.dirname(moduleURL.pathname);


```











### Clunky HTML Includes

When you need to expand pages with some more layout code.

```JavaScript


// tag <div data-import="component" data-component="my-component">
export default function () {
  let promise = Promise.resolve();
  const elements = document.querySelectorAll('[data-import="component"]');
  elements.forEach(function(element){
    promise = promise.then(()=>new Promise(function(resolve, reject){
      fetch(`components/${element.dataset.component}/index.html`)
      .then(function(response){return response.text();})
      .then(function(text){element.outerHTML = text; resolve()});
    }))
  })
  return promise;
}


```











### Convert Snapshots Of Artwork To A Time-lapse Video

```bash


# smush frames intoa video
ffmpeg -framerate 7 -pattern_type glob -i '*.jpg' -c:v libx264 -r 30 ~/output1.mp4

# hold the last frame for 60 s
ffmpeg -i output1.mp4 -vf tpad=stop_mode=clone:stop_duration=60 output1-long.mp4

```










### Upload via sftp



```bash

# Download
sftp [user]@host[:port][/dest_path/file] [/local_path]

# Upload
sftp meow@earth:/media/meow/ssd1/ <<< $'put antwerp.tar'

```











### Install MATE On A Raspberry PI

```bash

apt install mate-desktop-environment-extras -y
update-alternatives --config x-session-manager # select mate session
reboot

```











### How I Like My Unit Tests

Just actual, expected and deepEqual;

```JavaScript

const assert = require('assert');
const program = require('./index.js');

const input = [4, [ 1, 2, 3]];
const actual = program.apply(program, input);
const expected = [ 1, 2, 3]

console.info(actual);

assert.deepEqual( actual , expected );

```











### How I Like To Structure My Objects

There is something poetic about meta & data

```JavaScript

{

  meta: {
       uuid: '50b55281-adb2-46d0-85d0-d8a80dcc6b92',
       user: '07791d11-125b-43f7-ad27-694bb7f10a48',
    inherit: ['User', 'Authenticated', 'Animal'],
       tags: ['red', 'green', 'blue'],
    version: '132-0677083e-5edd-4e4d-8e67-388c479fec51',
      order: '0000001-c9dc5f89-b4ef-4e5b-a736-0caa9c3d0f57',
    deleted: false,
  },

  data: {
      'text': 'Buy Socks'
  }

}

```











### String Interpolator

I needed more dynamic string templates for some strange use case.

```JavaScript

function interpolate(t, c){return t.replace(/\${([^}]+)}/g,(m,p)=>p.split('.').reduce((a,f)=>a?a[f]:undefined,c)??m);}

interpolate('My ${a} is full of eels.',{a:'hovercraft'})
//> My hovercraft is full of eels.

interpolate('Answer to the Ultimate Question of Life, the Universe, and Everything is: ${robotic}',{robotic:parseInt(101010, 2)})
//> Answer to the Ultimate Question of Life, the Universe, and Everything is: 42

interpolate('Errors are kept to minimum: ${x.o.x.o.x.o.x.o.x.o.x.o.x.o}')
//> Errors are kept to minimum: ${x.o.x.o.x.o.x.o.x.o.x.o.x.o}

interpolate('Simple arrays are kind of ${0}', ["supported!"])
//> Simple arrays are kind of supported!

interpolate('Including complex arrays... ${A.c.h.0.0.0}! and will make you very brave, if used in production, and bless you for being so mighty! <3', {A:{c:{h:[[['Achooo']]]}}})
//> Including complex arrays... Achooo! and will make you very brave, if used in production, and bless you for being so mighty! <3

interpolate('A more complex answer to the Ultimate Question of Life, the Universe, and Everything is still: ${human.answer}',
{human:{answer:['Love', 'Wisdom', 'Funnyness', 'Aardvark', 'Hugs'].map(word=>word.charCodeAt(0)).reduce((a,i)=>a^i)/2}})
//> A more complex answer to the Ultimate Question of Life, the Universe, and Everything is still: 42

interpolate('When variable data is not present the interpolator re-prints ${data} (leaves it alone, as it should be).',{})
//> When variable data is not present the interpolator re-prints ${data} (leaves it alone, as it should be).

```



More To Come, this is just what I had sitting around in gists and recent code.
