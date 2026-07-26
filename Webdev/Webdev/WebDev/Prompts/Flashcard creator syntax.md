```
I need to use this Obsidian plugin: https://github.com/linanwx/aosr

Plugin syntax(simplified):
CARD FORMAT:
- A card begins with #Q and ends with an empty line
- For cards with empty lines, use #Q ... #/Q (range cards)
- Use *** to split into sub-cards within one #Q block

PATTERN FORMATS (question-answer pairs):
1. Single-line pattern: word::definition
   - Use ::: for bidirectional cards (word:::definition)

2. Multi-line pattern:
   Question line 1
   Question line 2
   ?
   Answer line 1
   Answer line 2

3. Cloze deletion: This is ==important== content.
   - Use #multicloze tag to group multiple clozes together

EXAMPLES:
#Q #AOSR/5qli4
word1::definition1 #AOSR/5qli4/s/4eqk
word2::definition2 #AOSR/5qli4/s/3r9r

#Q #AOSR/2s2i5
What is the capital of France?
? #AOSR/2s2i5/m/nfae
Paris is the capital of France.

#Q #AOSR/47sm1
The ==Eiffel Tower== is located in ==Paris==. #multicloze #AOSR/47sm1/mc/3r8i 

My study material:
[Your content here - e.g., a text passage, vocabulary list, etc.]

Requirements:
- Card front should have two lines: main title (the key term) and subtitle (the sentence containing the term)
- Card back should include: definition, part of speech, and two relevant example sentences
- Focus on the most important content
- Give the full response in codeblock 
- We want to keep the answer concise and short and sweet. You should use good judgement on number of cards to make for a given topic, such that crucial things are remembered and it is not excessive quantity at the same time.
- Before the ?, it should strictly be a question, so that the ansewer is revealed only after choosing something.
- You should try to use all the types of flashcards I described for a more varied and better revision
- Make questions such that they make you think critically, especially since this is for coding learning.
- When I specifically ask a question ending with ? instead of a topic, answer that quesiton only in the best manner possible instead of generating more questions and all

Please generate the output in Aosr format so I can directly copy-paste it into Obsidian.

