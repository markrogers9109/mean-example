HTMLify
=======

HTMLify can do both dynamic (on-the-fly) and static conversion from Markdown to
HTML. No server side (PHP/Perl etc.) involved.

Example
-------

[HTML file][1] containing the following markup can be opened in a web browser to
display this <README.md>.

[1]: <README.html>

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
<!DOCTYPE html><html><body>
<script src="htmlify.js" data-url="README.md"></script>
</body></html>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The same HTML file can be processed, using the following command, to embed the
text and produce a [static HTML][2].

[2]: <README-static.html>

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
node htmlify.js README.html README-static.html
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Features
--------

-   Single script for dynamic conversion and for compilation.

-   Can be installed via NPM.

-   Automatic refresh in dynamic mode.

-   Relative URLs correction.

-   Customization of generated HTML before embedding.

-   Document title can be set from Markdown document heading.

Dependencies
------------

Compiled script has no dependencies.

Browsers
--------

-   Safari

-   Chrome[^3]

    [^3]: Chrome needs `--allow-file-access-from-files` flag when HTML file with
    dynamic conversion is open locally.

License
-------

Apache 2
