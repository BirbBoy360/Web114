        let varApp = "apple";
        let varBan = "banana";
        
        console.log(`${varApp > varBan}`);

        console.log(`${"apple" > "banana"}`);
    
        console.log("apple" > "banana");
        
        if ("apple" > "banana") 
        {console.log('true')}
        
        else if (!("apple" > "banana")) 
        {console.log('false')}

        //This shouldn't ever run unless I misunderstand something
        else {console.log('fundamental understanding error')};
        
        console.log('So therefore,');
        console.log(`/ < \\ = ${"/" < "\\"} `);
        console.log(`{ < } = ${"{" < "}"} `);
        
        console.log("Because: \n002F < 005C \nand 007B < 007D");
        
        console.log("These values are hexadecimal so in decimal terms: \n47 < 92 \n123 < 125 ");

        console.log("\nIn the case of apple > banana");
        console.log("It checks the first letters first, which are a and b");
        console.log("While a is closer to a than b, the computer is checking the unicode values of the characters");
        console.log("So, in this case a is 0061 and b is 0062");
        console.log("So, a < b or 61 < 62");

        console.log("\nEven in the case of apple < apricot");
        console.log("Or, more easily app < apr");
        console.log("Both are read as series of four unicode characters");
        console.log("So app is 0061 0070 0070       apr is 0061 0070 0072");
        console.log("0061 and 0070 are the same between both so without reading more it cannot be determined whether app < apr");
        console.log("The first differing character is p < r so 0070 < 0072 which is")
        console.log("apple" < "apricot");