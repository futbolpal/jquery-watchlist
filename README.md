jquery-watchlist
================

Manages empty states for lists


`	
<ul data-attribute="depts-list" class="hide">
		<li data-empty>
			You have not added any users to the system.
		</li>
		<li data-clone="dept-list-item">
			<span class="dept-header-wrap" data-attribute="header-wrap">
				<button type="button" class="btn btn-link">
					<i class="icon-chevron-down"></i>
				</button> 
				<span class="letter-header"><!-- Letter goes here --></span>
			</span>
			<ul class="dept-user-list">
				<li data-clone="user-list-item">
					<button type="button" class="btn btn-link" data-attribute="user-name"><!-- fill in username and link via JS --></button>
					<small>
						<span class="muted" data-attribute="user-dept"><!-- fill in user department via JS --></span>
					</small>
				</li>
			</ul>
		</li>
	</ul>
`
