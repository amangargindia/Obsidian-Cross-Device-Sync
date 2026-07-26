#Q #AOSR/82src
What is the purpose of Isolation in ACID properties?
"It determines whether an ongoing transaction can see changes made by other transactions."
?
Definition: The database property that ensures concurrent transactions execute safely without interfering with one another's intermediate states.
Part of Speech: Noun
Example 1: Without isolation, a Python application might calculate financial totals using partially updated rows from another active query.
Example 2: Developers configure isolation levels in the DBMS to balance strict data accuracy against system performance.
***
What characterizes a Dirty Read?
"Reading uncommitted data from other transactions."
?
Definition: A concurrency flaw where a transaction accesses data modified by another transaction that has not yet been saved or committed.
Part of Speech: Noun
Example 1: If Transaction A updates `user_balance` but rolls back, and Transaction B reads that new balance before the rollback, B relies on invalid data.
Example 2: Setting your database to `ISOLATION LEVEL READ COMMITTED` effectively prevents this phenomenon.
***
How does a Non-repeatable Read occur during execution?
"Reading the same value multiple times, but getting different results due to other transactions."
? #AOSR/82src/m/z693
Definition: An anomaly where a transaction reads a specific row twice, but another concurrent transaction alters and commits that row in between the reads.
Part of Speech: Noun
Example 1: A backend service checks inventory (qty: 5), another user buys 1, the service checks again (qty: 4) within the exact same transaction block.
Example 2: To solve this, databases place shared locks on read rows when using the `REPEATABLE READ` isolation level.
***
What triggers a Phantom Read in a database query?
"Changes to the result set caused by other transactions inserting or deleting rows."
?
Definition: When a transaction executes a query returning a set of rows, and a concurrent transaction inserts or deletes rows matching that query condition before the first transaction finishes.
Part of Speech: Noun
Example 1: Querying "all active admins" yields 10 rows. Another transaction creates a new admin. Repeating the query yields 11 rows.
Example 2: Only the `SERIALIZABLE` isolation level completely protects against phantom reads by locking the entire read range.
#/Q

#Q
Lost Update::Definition: When two concurrent transactions read and update the same data, causing one update to overwrite the other. (Noun) | Ex 1: Two users fetch the same profile record; User B saves last, permanently wiping User A's changes. | Ex 2: Using optimistic concurrency control (like row versioning) catches and prevents lost updates.
***
Read Uncommitted:::Definition: The lowest isolation level allowing dirty reads, prioritizing speed over data consistency. (Noun) | Ex 1: Often used for rough analytical queries where exact precision isn't mission-critical. | Ex 2: Executing `SET SESSION TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;` in SQL.
***
Read Committed:::Definition: An isolation level that prevents dirty reads but still allows non-repeatable and phantom reads. (Noun) | Ex 1: This is the default isolation level in popular systems like PostgreSQL. | Ex 2: It ensures you only read data that has been fully committed to the database.
#/Q

#Q
The highest isolation level is ==Serializable==, which prevents all read phenomena by executing transactions in a ==serial== (sequential) manner. #multicloze

#Q #AOSR/5c6e9
==Snapshot Isolation== mitigates concurrency issues by offering a versioned view of the data, effectively preventing both ==dirty reads== and ==non-repeatable reads==. #multicloze #AOSR/5c6e9/mc/23dr 