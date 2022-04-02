# Showdown Extensions shots

I'm just having fun with [Showdown](https://github.com/showdownjs/showdown) extensions, exploring how I could interfere with Showdown's work to beautify Markdown while it is being parsed.

Here are some examples of objectives:

- Replace `<space>?` with `<nbsp;>?` (in French, a question mark is preceeded with a space, but you don't want the line to break).
  >Eg `Showdown est super !` would be converted as `Showdown est super&nbsp;!`
- Add thousand separators in numbers.
  >Eg `1234567` would be converted as `1,234,567` (or narrow no-break space as thousand separator in French).

Of course we want to do that only in _text_. We don't want to alter citations or hyperlinks.

The first example is easy to implement, [this is already done in MemCheck](https://github.com/VoltanFr/memcheck/blob/master/MemCheck.WebUI/wwwroot/js/Common.js#L91), and it works. But this is ugly code, inefficient, not smart. And, more importantly, this can't be done for numbers, otherwise we will break URLs.
```
  function beautifyTextForFrench(src) {
      var result = src.replace(/\s\?/g, "&nbsp;?");
      result = result.replace(/\s!/g, "&nbsp;!");
      result = result.replace(/\s;/g, "&nbsp;;");
      result = result.replace(/\s:/g, "&nbsp;:");
      return result;
  }
```

I hope that a future version of Showdown will bring very cool new features related to these needs (see [this issue](https://github.com/showdownjs/showdown/issues/908)).

The file of interest is [index.js](/wwwroot/js/index.js). You probably don't want to compile the project; but in case you want to, just open the sln file with Visual Studio (I use version 2022).
