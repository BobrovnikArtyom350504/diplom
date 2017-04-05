import { TSMap as Map } from "typescript-map";

export class CodeInterpreter {
    private processedScript;
    private executionSpeed: number= 1000;
    private isStopped: boolean = false;
    private availableVariables: Map<string, any> = new Map<string, any>();
    constructor(
        public script: string,
        public callback?,
        availableVariables?: Map<string, any>
    ) {
        this.processScript();
        if(availableVariables)
            this.addVariables(availableVariables);
    }

    setScript(script: string) {
        this.script = script;
        this.processScript()
    }

    stop() {
        this.isStopped = true;
    }

    run() {
        this.isStopped = false;
        this.doSteps();
    }

    doSteps() {
        setTimeout(()=>{
            let step = this.processedScript.next();
            if(!step.done) {
                if(!this.isStopped)
                    this.doSteps();
                console.log(step.value);
            }
            else this.callback();
        }, this.executionSpeed)
    }

    setSpeed(speed: number) {
        this.executionSpeed= speed;
    }

    private addVariables(variables: Map<string, any>) {
        variables.forEach((variable, key)=>{
            this.availableVariables.set(key, variable);
            window[key] = variable;
        });
    }

    private processScript() {
        let lines = this.script.split(/\r\n|\r|\n/);
        let processedLine = lines.map((line)=>{
            return `${line} yield "${line}";`;
        });
        let processedScript = processedLine.join('\n');
        this.setGenerator(processedScript);
    }

    private setGenerator(script: string) {
        let generatorString =  'function* (){' + script + '}';
        let generatorFunction = new Function('return ' + generatorString)();
        let generator = generatorFunction();
        this.processedScript = generator;
    }
}