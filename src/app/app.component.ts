import { Component, ElementRef, ViewChild } from '@angular/core';
import htmlToPdfmake from 'html-to-pdfmake';
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';


pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'htmltopdf12';

  @ViewChild('pdfTable') pdfTable: ElementRef;
  //PDF genratwe button click function
  public downloadAsPDF() {
    const doc = new jsPDF();
    //get table html
    const pdfTable = this.pdfTable.nativeElement;

    //html to pdf format
    var html = htmlToPdfmake(pdfTable.innerHTML);
   
    const documentDefinition = { content: html };

    pdfMake.createPdf(documentDefinition).open();

    

  
  }

}
