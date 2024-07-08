import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as Tesseract from 'tesseract.js';
import { ComFunService } from '../../service/com-fun.service';
@Component({
  selector: 'app-missing-deposit',
  templateUrl: './missing-deposit.component.html',
  styleUrl: './missing-deposit.component.css'
})
export class MissingDepositComponent implements OnInit {
  private apiKey = 'YOUR_GOOGLE_CLOUD_API_KEY';  // Replace with your API key
  private apiUrl = `https://vision.googleapis.com/v1/images:annotate?key=${this.apiKey}`;






  uploadForm!: FormGroup;
  urtForm!: FormGroup;
  constructor(private fb: FormBuilder,private comFun:ComFunService) { }
  selectedFile!: File;
  extractedWords: string[] = [];
  extractedText: string = ''
  imageUrl: string | ArrayBuffer | null = null;
  ngOnInit(): void {
    this.uploadForm = this.fb.group({
      file: [null]
    });
    this.urtForm = this.fb.group({
      utrno: ["",[Validators.required]],
      upiid: ["",[Validators.required]],
      amount: ["",[Validators.required]],
      paymentDate: ["",[Validators.required]]
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl = reader.result;
    };
    reader.readAsDataURL(this.selectedFile);
    if (this.selectedFile) {
      this.submitData();
    }
  }

  private extractWords(text: string): string[] {
    return text.split(/\s+/).filter(word => word.length > 0);
  }
  async submitData() {
    if (!this.selectedFile) {
      console.error('No file selected');
      return;
    }
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = (reader.result as string).split(',')[1];
        this.comFun.extractText(base64Image).subscribe(
          (data: any) => {
            this.extractedText = data;
            console.log(this.extractedText )
          },
          error => {
            console.error('Error:', error);
          }
        );
      };
      reader.readAsDataURL(this.selectedFile);
    }
    // try {
    //   this.getTextFromImage(this.selectedFile).then((text: string) => {
    //     this.extractedText = text;
    //     console.log(this.extractedText);
    //     const Upi = this.extractUpiIds(this.extractedText);
    //     this.urtForm.controls['upiid'].setValue(Upi[0]);
    //     this.urtForm.controls['utrno'].setValue(this.extractUtrNumber(this.extractedText));
    //     ;
    //   })
    //     .catch(error => {
    //       console.error('Error extracting text:', error);
    //     });
    //   console.log('Extracted Text:', this.extractedText);
    // } catch (error) {
    //   console.error('Error extracting text:', error);
    // }
  }

  hideImage(){
    this.imageUrl = null;
  }
  async getTextFromImage(imageFile: File): Promise<string> {
    return new Promise<string>(async (resolve, reject) => {
      const worker = await Tesseract.createWorker();

      (async () => {
        await worker.load();
        // await worker.loadLanguage('eng');
        await worker.reinitialize('eng');
        const { data: { text } } = await worker.recognize(imageFile);
        resolve(text);
        await worker.terminate();
      })().catch(err => reject(err));
    });

  }
  extractUtrNumber(text: string): string | null {
    const utrRegex = /\b(?:UTR|UPI transaction ID|UPI Ref No)\s*[:#]?\s*([A-Za-z0-9]{12,})\b/gi;
    const match = utrRegex.exec(text);
    return match ? match[1] : null;
  }

  extractUpiIds(text: string): string[] {
    const regex = /\b\w+\b@\b\w+\b/g;
    const matches: string[] = [];
    let match;
    while ((match = regex.exec(text)) !== null) {
        if (match[0]) {
            matches.push(match[0]);
        }
    } 
    return matches;
  }
  utrSubmit() {

  }

  

}
