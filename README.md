# What are some differences between interfaces and types in Typescript?
Type কিংবা Type Alias আমাদের কোডকে পড়তে এবং ম্যানেজ করতে সহজ করে দেয়া। এটা আমাদেরকে কিছু জটিল টাইপ্সের নিজস্ব নাম সেট করার সুযোগ দেয়। তাছাড়া, কিছু জটিল ডাটা স্ট্রাকচার অথবা ইউনিউন টাইপের নির্দিষ্ট নাম দেয়ার বেলাতেও সহযোগিতা করে।

অন্যদিকে, interface টাইপস্ক্রিপ্টে অবজেক্টের শেইপ, প্রোপার্টি এবং মেথড ডিফাইন করার জন্য ব্যবহার হয়। 
এখন আমরা তাদের মধ্যে কিছু মৌলিক পার্থক্য উদাহরণ এর মাধ্যমে দেখার চেষ্টা করবো:

১. অবজেক্টের শেইপ ডেফিনেশন:

Type:
type Product = {
name: string;
price: number;
category?: string;
}

Interface:
interface Product{
name: string;
price: number;
category?: string;
}

#Provide an example of using union and intersection types in Typescript

Union:
Union টাইপ একটা ভেরিয়েবলকে একের অধিক টাইপ ডিক্লেয়ার করতে সাহায্য করে। যেমন:
type id = string | number;

Intersection:
Intersection টাইপ, দুই বা দুইয়ের অধিক টাইপকে একত্র করে। যেমন:
type Person = {
name: string;
age: number;
}

type Employee = {
id: number;
role: string;
}

type User = Person & Employee;
