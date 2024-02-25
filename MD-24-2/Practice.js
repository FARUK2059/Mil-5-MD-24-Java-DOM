
// getElementsByTagName হলো JavaScript DOM মেথড, যা দিয়ে আমরা HTML ডকুমেন্টের মধ্যে ট্যাগের নাম দিয়ে এক বা একাধিক এলিমেন্টের তালিকা পেতে পারি।

// এটি একটি HTMLCollection অবজেক্ট ফেরত দেয়, যা স্পেসিফিক ট্যাগের সব ম্যাচিং এলিমেন্টগুলি ধারণ করে।

// একটি উদাহরণ দেখা যাক:

// <!DOCTYPE html>
// <html>
// <head>
//     <title>GetElementsByTagName Example</title>
// </head>
// <body>

// <h2>This is a heading</h2>
// <p>This is a paragraph.</p>
// <p>This is another paragraph.</p>
// <p>This is one more paragraph.</p>

<script>
    // Get all <p> elements
    var paragraphs = document.getElementsByTagName("p");

    // Loop through the HTMLCollection and change the text content
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].textContent = "This paragraph has been changed by JavaScript.";
    }
</script>

// </body>
// </html>

// উপরের উদাহরণে, getElementsByTagName মেথড ব্যবহার করে সব <p> এলিমেন্টগুলি নিয়েছি। তারপরে আমরা এই এলিমেন্টগুলির টেক্সট কন্টেন্ট পরিবর্তন করেছি textContent প্রপার্টি ব্যবহার করে। তার ফলে সব প্যারাগ্রাফের কন্টেন্ট পরিবর্তিত হয়েছে।

