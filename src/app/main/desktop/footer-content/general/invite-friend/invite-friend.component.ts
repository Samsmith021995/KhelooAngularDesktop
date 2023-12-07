import { Component } from '@angular/core';

@Component({
  selector: 'app-invite-friend',
  templateUrl: './invite-friend.component.html',
  styleUrl: './invite-friend.component.css'
})
export class InviteFriendComponent {
  isCopied = false;
  copyToClipboard() {
    const refUrlElement = document.querySelector(".ref_url") as HTMLSpanElement;

    // Select the text in the element
    const range = document.createRange();
    range.selectNode(refUrlElement);
    window.getSelection()?.removeAllRanges();
    window.getSelection()?.addRange(range);

    // Copy the selected text to the clipboard
    try {
      document.execCommand("copy");
      this.isCopied = true;
    } catch (err) {
      console.error("Unable to copy: ", err);
    } finally {
      // Clean up the selection
      window.getSelection()?.removeAllRanges();
      // Hide the "Copied" message after a short delay
      setTimeout(() => {
        this.isCopied = false;
      }, 1000);
    }
  }
}
