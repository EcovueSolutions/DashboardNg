import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

export interface Brand {
  ContextName: string;
  ContextId: number;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private DashboardService: DashboardService) {

  }

  brands: Brand[] = [];
  showTable = false
  contextLovData = [];
  contextVal:any;

  ngOnInit() {
    this.DashboardService.getSetupContext().subscribe(
      data => {
        this.brands = data.items
        this.contextLovData = data.items
      }
    )
  }

  //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns = [{ headerText: 'Context Name', field: 'ContextName' }, { headerText: 'Context Type', field: 'ContextType' }];
  dataSource = [];
  columnsToDisplay: string[] = ['ContextName', 'ContextType'];


  onContextChange(newValue:any) {
    console.log(JSON.stringify(newValue));
    //this.contextVal = newValue
    console.log('Context changed...' + this.contextVal);
    let contextInfo = getHeader(this.contextLovData, this.contextVal)
    let headerList =  contextInfo['columns'];
    let endapi = contextInfo['endapi']
    console.log("endapi: "+endapi);
    var colList: Array<string> = []
    let headerListForm = JSON.parse(headerList)
    //console.log("headerList: "+headerList.length)
    for (let j = 0; j < headerListForm.length; j++) {
      //console.log('index: '+headerList[j]['field'])
      if (headerListForm[j]['field'] != null)
        colList.push(headerListForm[j]['field'])
    }
    this.displayedColumns = headerListForm
    //console.log("colList: " + colList)
    this.columnsToDisplay = colList.slice(0, 8);

    this.showTable = true
    this.DashboardService.getTableDetails(endapi).subscribe(
      data => {
        this.dataSource = data.items


      }
    )
  }

}

function getHeader(contextData: string | any[], contextVal: any) {
  let returnHeader={"columns":"","endapi":""};

  for (let i = 0; i < contextData.length; i++) {
    if (contextData[i].ContextName == contextVal) {

      returnHeader['columns'] = contextData[i].HeaderColumns;
      returnHeader["endapi"]=contextData[i].ApiEndpoint;

      

    }
  }
  return returnHeader;

}


export interface SetupContext {
  ContextName: string;
  ContextType: number;
  ObjectName: number;
  ObjectType: string;
}

const CONTEXT_DATA = [
  {
    "ContextId": 40,
    "ContextName": "AP Reports",
    "ContextType": "CRUD",
    "ObjectName": "ECOUI_AP_REPORTS",
    "ObjectType": "TABLE",
    "ApiEndpoint": "apreportsvoapi",
    "ApiParameters": null,
    "Enabled": "Y",
    "LastUpdateDate": "2021-03-10T15:50:43-05:00",
    "LastUpdatedBy": "sudugula",
    "HeaderColumns": "[{\"headerText\":\"Actions\",\"headerClassName\":\"tableHeaderStyle\",\"field\":null,\"template\":\"actionsTemplate\"},{\"headerText\":\"Report Id\",\"field\":\"ReportId\",\"headerClassName\":\"tableHeaderStyle\"},{\"headerText\":\"Parent Report Id\",\"field\":\"ParentReportId\",\"headerClassName\":\"tableHeaderStyle\"},{\"headerText\":\"Report Category Id\",\"field\":\"ReportCategoryId\",\"headerClassName\":\"tableHeaderStyle\"},{\"headerText\":\"Report Type\",\"field\":\"ReportType\",\"headerClassName\":\"tableHeaderStyle\"},{\"headerText\":\"Report Name\",\"field\":\"ReportName\",\"headerClassName\":\"tableHeaderStyle\"},{\"headerText\":\"Report Title\",\"field\":\"ReportTitle\",\"headerClassName\":\"tableHeaderStyle\"},{\"headerText\":\"Description\",\"field\":\"Description\",\"headerClassName\":\"tableHeaderStyle\"},{\"headerText\":\"Report Query Id\",\"field\":\"ReportQueryId\",\"headerClassName\":\"tableHeaderStyle\"},{\"headerText\":\"Report Params\",\"field\":\"ReportParams\",\"headerClassName\":\"tableHeaderStyle\"},{\"headerText\":\"Report Api Endpoint\",\"field\":\"ReportApiEndpoint\",\"headerClassName\":\"tableHeaderStyle\"},{\"headerText\":\"Report Display Columns\",\"field\":\"ReportDisplayColumns\",\"headerClassName\":\"tableHeaderStyle\"},{\"headerText\":\"Enabled\",\"field\":\"Enabled\",\"headerClassName\":\"tableHeaderStyle\"},{\"headerText\":\"Created By\",\"field\":\"CreatedBy\",\"headerClassName\":\"tableHeaderStyle\"},{\"headerText\":\"Creation Date\",\"field\":\"CreationDateStr\",\"headerClassName\":\"tableHeaderStyle\"},{\"headerText\":\"Last Updated By\",\"field\":\"LastUpdatedBy\",\"headerClassName\":\"tableHeaderStyle\"},{\"headerText\":\"Last Update Date\",\"field\":\"LastUpdateDateStr\",\"headerClassName\":\"tableHeaderStyle\"}]",
    "EditColumns": "[{\"field_type\":\"LOV\",\"field_name\":\"Report Category\",\"field_id\":\"ReportCategoryId\",\"field_value\":null},{\"field_type\":\"LOV\",\"field_name\":\"Report Type\",\"field_id\":\"ReportType\",\"field_value\":\"\"},{\"field_type\":\"LOV\",\"field_name\":\"Parent Report\",\"field_id\":\"ParentReportId\",\"field_value\":null},{\"field_type\":\"TEXT\",\"field_name\":\"Report Name\",\"field_id\":\"ReportName\",\"field_value\":\"\"},{\"field_type\":\"TEXT\",\"field_name\":\"Report Title\",\"field_id\":\"ReportTitle\",\"field_value\":\"\"},{\"field_type\":\"TEXT\",\"field_name\":\"Description\",\"field_id\":\"Description\",\"field_value\":\"\"},{\"field_type\":\"LOV\",\"field_name\":\"Report Query\",\"field_id\":\"ReportQueryId\",\"field_value\":null},{\"field_type\":\"TEXT\",\"field_name\":\"Report Params\",\"field_id\":\"ReportParams\",\"field_value\":\"\"},{\"field_type\":\"TEXT\",\"field_name\":\"Report Api Endpoint\",\"field_id\":\"ReportApiEndpoint\",\"field_value\":\"\"},{\"field_type\":\"TEXT\",\"field_name\":\"Report Display Columns\",\"field_id\":\"ReportDisplayColumns\",\"field_value\":\"\"},{\"field_type\":\"CHECKBOX\",\"field_name\":\"Enabled\",\"field_id\":\"Enabled\",\"field_value\":\"\"}]",
    "PrimaryidColumn": "ReportId",
    "CreationDate": "2021-03-10T15:50:43-05:00",
    "label": "AP Reports",
    "value": "AP Reports",
    "CreatedBy": "sudugula",
    "links": [
      {
        "rel": "self",
        "href": "http://wcidev:9001/ecouiapservices/rest/1/setupcontextvoapi/40",
        "name": "setupcontextvoapi",
        "kind": "item"
      },
      {
        "rel": "canonical",
        "href": "http://wcidev:9001/ecouiapservices/rest/1/setupcontextvoapi/40",
        "name": "setupcontextvoapi",
        "kind": "item"
      }
    ]
  }
];
