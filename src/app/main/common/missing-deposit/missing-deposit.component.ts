import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as Tesseract from 'tesseract.js';
@Component({
  selector: 'app-missing-deposit',
  templateUrl: './missing-deposit.component.html',
  styleUrl: './missing-deposit.component.css'
})
export class MissingDepositComponent implements OnInit {
  uploadForm!: FormGroup;
  urtForm!: FormGroup;
  constructor(private fb: FormBuilder) { }
  selectedFile!: File;
  extractedWords: string[] = [];
  extractedText: string = ''
  imageUrl: string | ArrayBuffer | null = null;
  ngOnInit(): void {
    this.uploadForm = this.fb.group({
      file: [null]
    });
    this.urtForm = this.fb.group({
      utr: [""]
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

    try {
      this.getTextFromImage(this.selectedFile).then((text: string) => {
        this.extractedText = text;
        this.urtForm.controls['utr'].setValue(this.extractUtrNumber(this.extractedText));
        ;
      })
        .catch(error => {
          console.error('Error extracting text:', error);
        });
      console.log('Extracted Text:', this.extractedText);
    } catch (error) {
      console.error('Error extracting text:', error);
    }
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
  utrSubmit() {

  }
}
