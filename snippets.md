


### A Strange Little Discovery

I was debugging something with a simple checksum algorithm as I was deep in some complex code, and this thing got me.
Both Athens and Naples return the same number, based on the ASCII table.

```JavaScript

['Athens', 'Naples']
  .map(
    name=>name.split('').map(letter=>letter.charCodeAt()).reduce((response, asciiValue)=>response+asciiValue)
  );

// Array [ 611, 611 ] :(

```










### Convert A List Of Paths To A Tree

Unusually short piece of code for converting a simple list of files into a complex data structure.

A list of files may look like this

```javascript
[
  '.checksums.json',
  'SMARTSUM',
  'a/a.txt',
  'a/b/c/x.txt',
  'b.txt',
  'c.txt',
  'games/dott/dott-ega.exe',
  'games/rott/manual/index.html',
  'games/rott/play.exe',
  'my-documents/3d-stuff/blender/bork.blend',
  'my-documents/3d-stuff/blender/old-version.blend',
  'my-documents/music/some-file.mp3',
  'sub/sub-a.txt'
]
```

And the resulting tree like this

```javascript
{
  'my-documents': {
    name: 'my-documents',
    directory: true,
    created: false,
    elements: {
      music: {
        name: 'music',
        directory: true,
        created: false,
        elements: { 'some-file.mp3': { name: 'some-file.mp3', file: true } }
      },
      '3d-stuff': {
        name: '3d-stuff',
        directory: true,
        created: false,
        elements: {
          blender: {
            name: 'blender',
            directory: true,
            created: false,
            elements: {
              'bork.blend': { name: 'bork.blend', file: true },
              'old-version.blend': { name: 'old-version.blend', file: true }
            }
          }
        }
      }
    }
  },
  a: {
    name: 'a',
    directory: true,
    created: false,
    elements: {
      b: {
        name: 'b',
        directory: true,
        created: false,
        elements: {
          c: {
            name: 'c',
            directory: true,
            created: false,
            elements: { 'x.txt': { name: 'x.txt', file: true } }
          }
        }
      },
      'a.txt': { name: 'a.txt', file: true }
    }
  },
  sub: {
    name: 'sub',
    directory: true,
    created: false,
    elements: { 'sub-a.txt': { name: 'sub-a.txt', file: true } }
  },
  games: {
    name: 'games',
    directory: true,
    created: false,
    elements: {
      rott: {
        name: 'rott',
        directory: true,
        created: false,
        elements: {
          manual: {
            name: 'manual',
            directory: true,
            created: false,
            elements: { 'index.html': { name: 'index.html', file: true } }
          },
          'play.exe': { name: 'play.exe', file: true }
        }
      },
      dott: {
        name: 'dott',
        directory: true,
        created: false,
        elements: { 'dott-ega.exe': { name: 'dott-ega.exe', file: true } }
      }
    }
  },
  'b.txt': { name: 'b.txt', file: true },
  'c.txt': { name: 'c.txt', file: true },
  '.checksums.json': { name: '.checksums.json', file: true },
  SMARTSUM: { name: 'SMARTSUM', file: true }
}
```

This is what a programmer does for a million dollars a year. It is short, it is void of any theory, and it is just data flowing through pipes.
A lot of company owners don't understand that they don't have to understand a program, they can reason about it from the data flow alone.

Functional programming as you see here, can be represented graphically, thus it puts them into the game... hence the high pay.

```JavaScript

    const targets = lo.uniqBy(filtered.map(o => path.dirname(o)).filter(o => o !== '.').map(o => o.split('/')).map(o => cascade2(o)).flat(1), o => o.join())
    
    targets.map(o => o.map(o => [o, 'elements']).flat()).map(o => lo.set(tree, o.map(o => o), {}))
    targets.map(o => lo.initial(o.map(o => [o, 'elements']).flat())).map(o => lo.set(tree, o.map(o => o), { name: lo.nth(o, -1), directory: true, created: false }))
    filtered.map(o => o.split('/')).map(o => lo.initial(o.map(o => [o, 'elements']).flat())).map(o => lo.set(tree, o.map(o => o), { name: lo.nth(o, -1), file: true }))


```

To get at the data here you have to use a dig function which looks like this:

```JavaScript

const dig = (path, data = tree) => lo.get(data, lo.initial(path.replace(/^\//, '').replace(/\/$/, '').split(separator).map(o => [o, 'elements']).flat()))

```

And this is how you'd use it:

```JavaScript

console.log(  dig('/my-documents/3d-stuff/blender/')  )

// would print

{
  name: 'blender',
  directory: true,
  created: false,
  // note that it includes elements because it is not costly, and makes things simple.
  elements: {
    'bork.blend': { name: 'bork.blend', file: true },
    'old-version.blend': { name: 'old-version.blend', file: true }
  }
}

```









### Changed File Solver

Unusually short piece of code for listing file changes. Intersection means pick items that are the same, and difference pick the ones that are different.

This program operates both on filenames, and a hash of the content of the file.
I made it calculate changed files based on name __and__ file contents.


```JavaScript

function solver(current, previous, pick=['name', 'size', 'mdate', 'hash']){
  const lookup = o => Object.entries(o.data).map(([name, fingerprints]) => ({name, hash:[name, ...Object.values(lo.pick(fingerprints, pick))].join()}));
  const [currentNames, previousNames] = [current, previous].map(o=>Object.keys(o.data));
  const [currentHash, previousHash] = [current, previous].map(o => lookup);
  const normal = intersectionBy(currentHash, previousHash, o=>o.hash).map(o => o.name);
  const create = difference(currentNames, previousNames);
  const update = difference(intersection(previousNames, currentNames), normal);
  const remove = difference(previousNames, currentNames);
  return { create, update, remove, normal };
}

```










### Pretty Pagerizer

I use a popular function called chunk, to split a list into groups or chunks.
You get another list, but now it holds the chunks, and the chunks hold the items.

The chunks are the things you see on a single page. ```pp``` variable means per page.
I then enrich the chunks with browsing information, this information makes the 1,2,3,4,5,6,7... buttons on the bottom.


But there is a nuisance here, because when you are in the middle of a list,
then you have an even number of items going back and forth:


```
1 2 3 4 5 [6] 7 8 9 10 11

```

But as you near the end, you run out of them:

```

1 2 3 4 5 6 7 8 [9] 10 11

```

So what I do here is run a simulation, of moving through the list,
and then as I near the end, I calculate how many places there are, basically without math.
I speak the language of manipulating lists, like the rest of the program.


Simulation is a powerful technique, you drop yourself in the context of your challenge,
and now you ```"see"``` everything around you, you can taste it, sample it, inspect it.


```JavaScript

function doLayout(db,pp){
  const layout = [];
  const pages = chunk(db, pp)
  let counter = 0;
  for(const posts of pages){
    const home = counter==0;
    const name = counter==0?'index.html':`index-${counter}.html`;
    const next = (counter+1>(pages.length-1)?0:counter+1);
    const prev = (counter-1<0?(pages.length-1):counter-1);
    const first = !counter;
    const last = counter==pages.length-1
    const total = pages.length;
    const browse = {home, name,total,counter,next,prev,first,last};
    layout.push({browse,posts});
    counter++;
  }

  let cursor = 0;
  const [leftSize, rightSize] = [7,7];
  const simulation = range(layout.length);
   for(const page of simulation ){
     const [left,right] = partition(simulation.filter(i=>i!=cursor), o=>(indexOf(simulation,o)<cursor))
     let back = takeRight(left,leftSize)
     let forw = take(right,rightSize)
     if(back.length<leftSize) forw = take(right, rightSize + (leftSize-back.length ) );
     if(forw.length<rightSize) back =     takeRight(left,  leftSize  + (rightSize-forw.length) );
     Object.assign(layout[cursor].browse, {back, forw})
     cursor++
   }
  return layout;
}


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
      on:drop={(event)=>{event.preventDefault(); list.splice(index, 0, list.splice(parseInt(event.dataTransfer.getData("text/plain")), 1)[0]); list=list; console.log   (`Moved: ${event.dataTransfer.getData("text/plain")} to ${index}`)}}
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
  .pipe(gulpIf(isJavaScript, uglify()))
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
