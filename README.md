jquery-watchlist
================

Manages empty states for lists


```	
<ul id="users-list">
	<li data-empty>
		You have not added any users to the system.
	</li>
	<li data-clone="user-list-item">
		... Rendering of a user ...
	</li>
</ul>
```


Then with Javascript

```
$("#users_list").watchList();
```
