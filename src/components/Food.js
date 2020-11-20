import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./Food.css";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { CardGroup } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: "70.50%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="background-color-cards">
      <CardGroup>
        <ul>
          <div>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    W
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Wild Boar"
                subheader="September 14, 2020"
              />
              <CardMedia
                className={classes.media}
                image="https://www.toptravelsights.com/wp-content/uploads/2020/08/Estonian-Wild-Boar.jpg"
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Estonia is a great country if you want to try game meat. We
                  had dinner in a windmill
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                    Estonia is a great country if you want to try game meat.
                  </Typography>
                  <Typography paragraph>
                    Estonia is a great country if you want to try game meat. We
                    had dinner in a windmill in Kuressaare when I found out that
                    I really like wild boar. The meat is very strong but also
                    very delicious and Estonians use it for a variety of dishes.
                    In that windmill in Kuressaare, Daniel ate a wild boar
                    steak. In Tallinn, I had boar lasagna, which was also very
                    nice.
                  </Typography>
                  <Typography paragraph>
                    Wild boar is one of those meats that you can find all over
                    the country so when you get the chance to try it, go for it.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </div>
        </ul>
        <ul>
          <div>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    B
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Buckwheat"
                subheader="September 14, 2020"
              />
              <CardMedia
                className={classes.media}
                image="https://www.toptravelsights.com/wp-content/uploads/2020/08/Estonian-Buckwheat-1536x864.jpg"
                title="Buckwheat"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  One of my first Estonian meals consisted of a bowl of
                  buckwheat with various vegetables
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                    One of my first Estonian meals consisted of a bowl of
                    buckwheat with various vegetables
                  </Typography>
                  <Typography paragraph>
                    One of my first Estonian meals consisted of a bowl of
                    buckwheat with various vegetables and I absolutely loved it!
                    The restaurant prepared the buckwheat almost like a risotto,
                    so it was hot and creamy and very delicious. And on top of
                    that, buckwheat is very healthy! From what I read, this
                    grain isn’t native to Estonia but has been incorporated very
                    well into the local cuisine.
                  </Typography>
                  <Typography paragraph>
                    You’ll find it on a few menus here and there, so go for it,
                    if you get the chance.
                  </Typography>
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and
                    then serve.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </div>
        </ul>
        <ul>
          <div>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    K
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Kama"
                subheader="September 14, 2020"
              />
              <CardMedia
                className={classes.media}
                image="https://www.toptravelsights.com/wp-content/uploads/2020/08/Estonian-Kama.jpg"
                title="Kama"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Kama is a flour mixture. Most often, it contains barley, oat,
                  rye and peas.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                    Kama is a flour mixture. Most often, it contains barley,
                    oat, rye and peas.
                  </Typography>
                  <Typography paragraph>
                    Kama is a flour mixture. Most often, it contains barley,
                    oat, rye and peas. You can find kama mixed into all kind of
                    desserts, but most commonly, you’ll see it mixed with
                    buttermilk or kefir. If you go to a bakery, you can also
                    find kama cakes. When we tried this mixture, it came as kama
                    jelly.
                  </Typography>
                  <Typography paragraph>
                    The jelly was very nice as it had a bit of a bready
                    aftertaste but was otherwise sweet and delicious.
                  </Typography>
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and
                    then serve.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </div>
        </ul>
        <ul>
          <div>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    V
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Vastlakukkel"
                subheader="September 14, 2020"
              />
              <CardMedia
                className={classes.media}
                image="https://www.toptravelsights.com/wp-content/uploads/2020/08/Estonian-Vastlakukkel.jpg"
                title="Vastlakukkel"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  If you come to Estonia in February, you’re in luck because
                  you’ll get to try these delicious cream buns.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                    If you come to Estonia in February, you’re in luck because
                    you’ll get to try these delicious cream buns.
                  </Typography>
                  <Typography paragraph>
                    If you come to Estonia in February, you’re in luck because
                    you’ll get to try these delicious cream buns. Traditionally,
                    they are served for Shrove Tuesday, which marks the
                    beginning of the Catholic Lent. But even if you’re not there
                    for Shrove Tuesday, you should find them in February and
                    March in bakeries all over the country. Vastlakukkel consist
                    of a sweet bun filled with cream. You can find variations
                    all over the country, especially if you go to more fancy
                    bakeries or cafes. Traditionally, they only have cream and
                    maybe jam. But I’ve seen them filled with chocolate cream or
                    even pistachio cream. The latter was very, very delicious so
                    if you stumble across one of those, make sure to try it.
                  </Typography>
                  <Typography paragraph>
                    A good place to eat vastlakukkel is in Cafe Maiasmokk, the
                    oldest cafe in Tallinn and also in all of Estonia.
                  </Typography>
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and
                    then serve.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </div>
        </ul>

        <ul>
          <div>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    H
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Herring"
                subheader="September 14, 2020"
              />
              <CardMedia
                className={classes.media}
                image="https://www.toptravelsights.com/wp-content/uploads/2020/08/Baltic-Herring.jpg"
                title="Herring"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Talking about fish that is very typical for the Baltic Sea.
                  One of the dishes you should absolutely try in Estonia is
                  herring.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                    Talking about fish that is very typical for the Baltic Sea.
                    One of the dishes you should absolutely try in Estonia is
                    herring.
                  </Typography>
                  <Typography paragraph>
                    Talking about fish that is very typical for the Baltic Sea.
                    One of the dishes you should absolutely try in Estonia is
                    herring. This fish is popular in all of the Baltics, and
                    also in many other countries bordering the Baltic Sea. But
                    in Estonia, herring is deemed so important that it was
                    declared the national fish in 2007! Traditionally, fishermen
                    would catch most of the fish in spring and then prepare it
                    for winter. That is why, most of the time, you will eat
                    herring either salted, marinated or smoked. If you’re lucky,
                    you’ll come across rosolje with herring. This is a salad
                    made with potatoes, beetroot, and, usually, herring. We
                    didn’t see it on menus anywhere, but my German grandmother
                    used to make a similar salad for Christmas and I always
                    loved it.
                  </Typography>
                  <Typography paragraph>
                    So I know that these three ingredients work well together
                    and I’m sure that rosolje is delicious.
                  </Typography>
                  <Typography>
                    So I know that these three ingredients work well together
                    and I’m sure that rosolje is delicious.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </div>
        </ul>
        <ul>
          <div>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    A
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Ale Coq"
                subheader="September 14, 2020"
              />
              <CardMedia
                className={classes.media}
                image="https://www.toptravelsights.com/wp-content/uploads/2020/08/Estonian-drinks.jpg"
                title="Ale Coq"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Let us sum up all of the wonderful (and sometimes a bit
                  strange) drinks that we tried in Estonia.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                    Let us sum up all of the wonderful (and sometimes a bit
                    strange) drinks that we tried in Estonia.
                  </Typography>
                  <Typography paragraph>
                    Let us sum up all of the wonderful (and sometimes a bit
                    strange) drinks that we tried in Estonia. The one that’s
                    easiest to find is Valge Klaar, a lemonade that contains
                    apple juice and is absolutely delicious. The recipe dates
                    back to the 70s and it is produced by Ale Coq, a name that
                    you will see on lots of bottles. Besides Valge Klaar, they
                    produce regular lemonade and a large variety of other
                    drinks. The next drink that you should try is Kali. This
                    beverage is made from slightly fermented rye bread. If that
                    sounds weird to you, don’t worry. It sounded weird to us as
                    well and we still enjoyed it. Kali contains a little bit of
                    alcohol, but the amount is so tiny that we didn’t really
                    taste it. And the last drink you should have is birch sap.
                    Yes, you heard right. In Estonia, you can drink birch sap.
                  </Typography>
                  <Typography paragraph>
                    It looks almost like water but is a bit more viscous and
                    tastes slightly sweet. We found it on Kuressaare, so if you
                    go there, you should try it. #16 Dumplings
                  </Typography>
                  <Typography>
                    It looks almost like water but is a bit more viscous and
                    tastes slightly sweet. We found it on Kuressaare, so if you
                    go there, you should try it. #16 Dumplings
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </div>
        </ul>
      </CardGroup>
    </div>
  );
}
