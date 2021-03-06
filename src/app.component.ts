import {Component} from "angular2/core";
import {EmitterService} from "./service/EmitterService";

import {TodoComponent} from "./todo/todo.component";
import {TabDemoComponent} from "./tab/tab.demo";
import {ZippyDemoComponent} from "./zippy/zippy.demo";
import {DataGridDemoComponent} from "./datagrid/datagrid.demo";
import {PaginationDemoComponent} from "./pagination/pagination.demo";

import {UpperComponent} from "./upper.component";

@Component({
    selector: "app",
    directives: [
        TodoComponent,
        TabDemoComponent,
        ZippyDemoComponent,
        DataGridDemoComponent,
        PaginationDemoComponent,
        UpperComponent
    ],
    providers:[EmitterService],
    template: `

        <div [hidden]="true">
            <hr/>
            <upper>make me upper</upper>
        </div>    
        
        <div [hidden]="true">
            <hr/>
            <pagination-demo></pagination-demo>
        </div>
        <div [hidden]="false">
            <hr/>
            <datagrid-demo></datagrid-demo>
        </div>
        <div [hidden]="true">
            <hr/>
            <todo-demo></todo-demo>
        </div>
        <div [hidden]="true">        
            <hr/>
            <tab-demo></tab-demo>
        </div>
        <div [hidden]="true">                        
            <hr/>
            <zippy-demo></zippy-demo>
        </div>                
    `
})

export class AppComponent { 
    constructor(){

    }

}
