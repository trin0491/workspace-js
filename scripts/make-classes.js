const fs = require('fs');
const EOL = require('os').EOL;

function writeParentModule(range, path) {
  const stream = fs.createWriteStream(`${path}/parent.module.ts`);
  stream.once('ready', function () {
    stream.write([
      'import { NgModule } from "@angular/core";',
      'import { CommonModule } from "@angular/common";'
    ].join(EOL));
    stream.write(EOL);
    stream.write(
      range.map(i => `import { TestModule${i} } from "./test${i}.module";`).join(EOL)
    );
    stream.write(EOL);
    stream.write([
      '@NgModule({',
      '  imports: [',
      '    CommonModule,'
    ].join(EOL));
    stream.write(EOL);
    stream.write(range.map(i => `    TestModule${i}`).join(',' + EOL));
    stream.write(EOL);
    stream.write([
      '  ]',
      '})',
      'export class ParentModule { }'
    ].join(EOL));
    stream.end();
  });
}

function writeComponents(range, path) {
  range.forEach(i => {
    const stream = fs.createWriteStream(`${path}/test${i}.component.ts`);
    stream.once('ready', () => {
      stream.write([
        'import { Component, OnInit } from "@angular/core";',
        '',
        '@Component({',
        '  selector: "ws-test-${i}",',
        '  template: "<div>Test {{id}}</div>",',
        '  styles: []',
        '})',
        `export class TestComponent${i} implements OnInit {`,
        '  id: string;',
        '  constructor() {',
        '  }',
        '  ngOnInit() {',
        `    this.id = "${i}";`,
        '  }',
        '}'
      ].join(EOL));
      stream.write(EOL);
      stream.end();
    })
  });
}

function writeModules(range, path) {
  range.forEach(i => {
    const stream = fs.createWriteStream(`${path}/test${i}.module.ts`);
    stream.once('ready', () => {
      stream.write([
        'import { NgModule } from "@angular/core";',
        'import { CommonModule } from "@angular/common";',
        `import { TestComponent${i} } from "./test${i}.component";`,
        '',
        '@NgModule({',
        `  declarations: [TestComponent${i}],`,
        '  imports: [',
        '    CommonModule',
        '  ],',
        `  exports: [TestComponent${i}]`,
        '})', 
        `export class TestModule${i} { }`,
      ].join(EOL));
      stream.write(EOL);
      stream.end();
    })
  });
}

const args = process.argv.slice(2);
if (args.length < 1) {
  console.error("usage: <count> <path>");
  process.exit(1);
}

const COUNT = 100;
const PATH = args[0];
const RANGE = [...Array(COUNT).keys()];

writeModules(RANGE, PATH);
writeComponents(RANGE, PATH);
writeParentModule(RANGE, PATH);
