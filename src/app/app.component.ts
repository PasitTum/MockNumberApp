import { Component } from '@angular/core';

interface ThaiNumber {
  thai: string;
  arabic: string;
  pronunciation: string;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  
  numbers: ThaiNumber[] = [
    { thai: '๑', arabic: '1', pronunciation: 'หนึ่ง', description: 'เริ่มจากเส้นตรงลงมา แล้วหักมุมไปทางขวา' },
    { thai: '๒', arabic: '2', pronunciation: 'สอง', description: 'เริ่มจากเส้นโค้งบน แล้วต่อด้วยเส้นโค้งล่าง' },
    { thai: '๓', arabic: '3', pronunciation: 'สาม', description: 'เริ่มจากเส้นโค้งซ้าย แล้วต่อด้วยเส้นโค้งขวา' },
    { thai: '๔', arabic: '4', pronunciation: 'สี่', description: 'เริ่มจากเส้นตรงลง แล้วโค้งไปทางซ้าย' },
    { thai: '๕', arabic: '5', pronunciation: 'ห้า', description: 'เริ่มจากจุดบน ลากลงมาเป็นเส้นโค้ง' },
    { thai: '๖', arabic: '6', pronunciation: 'หก', description: 'เริ่มจากวงกลมด้านบน ต่อด้วยเส้นโค้งล่าง' },
    { thai: '๗', arabic: '7', pronunciation: 'เจ็ด', description: 'เริ่มจากเส้นเฉียง แล้วต่อด้วยเส้นโค้งล่าง' },
    { thai: '๘', arabic: '8', pronunciation: 'แปด', description: 'เริ่มจากวงกลมบน ต่อด้วยวงกลมล่าง' },
    { thai: '๙', arabic: '9', pronunciation: 'เก้า', description: 'เริ่มจากวงกลม ต่อด้วยเส้นโค้งด้านล่าง' },
    { thai: '๑๐', arabic: '10', pronunciation: 'สิบ', description: 'เขียนเลข ๑ ตามด้วยเลข ๐' }
  ];

  nextPage() {
    if (this.currentPage < 10) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }
}